import { Form } from "../Form"
import { FormButton, FormTitle, FormDesc, FormHead } from "../styled"
import { IFormBookingInputs } from "./type"

import { getToken, sendEmail } from "@services/api"
import { FormInput, FormInputPhone } from "../FormIpnut"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useTelegram } from "@hooks/useTelegram"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@store/index"
import { closeForm } from "@store/slices/formSlice"
import { Modal } from "@mui/material"
import { Box } from "@mui/material"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

function FormBooking() {
	const { tg, user } = useTelegram()

	const dispatch = useDispatch()
	const { isOpen, title, subject, description, buttonText } = useSelector(
		(state: RootState) => state.form
	)

	const formCloseHandle = () => {
		dispatch(closeForm())
	}

	const {
		formState: { errors },
		control,
		reset,
		handleSubmit,
	} = useForm<IFormBookingInputs>({
		mode: "onChange",
		defaultValues: {
			name: user?.first_name ?? "",
			tel: "",
		},
	})

	const onSubmit: SubmitHandler<IFormBookingInputs> = async formData => {
		try {
			const token = await getToken(USERNAME, PASSWORD)

			const response = await sendEmail(token, {
				subject: subject,
				fio: formData.name,
				tel: formData.tel,
				message: description,
			})

			if (response.status === true) {
				if (tg) {
					tg.showConfirm(response.message)
				}
				reset()
				dispatch(closeForm())
			}
		} catch (error) {
			console.error("Ошибка при отправке заявки", error)
		}
	}

	const originalHeight = window.innerHeight

	// Функция для корректировки положения формы
	function adjustForKeyboard() {
		const isKeyboardOpen = window.innerHeight < originalHeight
		const formElement = document.getElementById("formOrder")

		if (formElement) {
			if (isKeyboardOpen) {
				// Прокрутка формы в видимую область, если клавиатура открыта
				formElement.scrollIntoView({ behavior: "smooth", block: "center" })
			} else {
				// Вернуть форму в исходное положение, если клавиатура закрыта
				formElement.style.transform = "translateY(0)"
			}
		}
	}

	function initKeyboardAdjustment() {
		// Обработка события viewportChanged от Telegram Web App
		tg.onEvent("viewportChanged", adjustForKeyboard)

		// Дополнительная обработка событий resize и focus
		window.addEventListener("resize", adjustForKeyboard)
		document.querySelectorAll("input").forEach(input => {
			input.addEventListener("focus", adjustForKeyboard)
			input.addEventListener("blur", adjustForKeyboard)
		})
	}

	// Вызов функции инициализации
	initKeyboardAdjustment()

	if (!isOpen) return null

	return (
		<Modal open={isOpen} onClose={formCloseHandle}>
			<Box
				id="formOrder"
				sx={{
					position: "absolute",
					top: 16,
					bottom: "auto",
					left: 0,
					right: 0,
					width: "90%",
					maxWidth: 480,
					height: "fit-content",
					margin: "auto",
					background: "#ffffff",
					borderRadius: "24px",
					padding: "24px",
				}}
			>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FormHead>
						<FormTitle>{title}</FormTitle>
						{description && <FormDesc>{description}</FormDesc>}
					</FormHead>
					<Controller
						control={control}
						name="name"
						rules={{
							minLength: {
								value: 3,
								message: "Имя должно содержаить больше 3 символов",
							},
							maxLength: {
								value: 18,
								message: "Поле не может содержать больше 18 символов",
							},
							pattern: {
								value: /^[А-Яа-я]+(\s[А-Яа-я]+)?$/i,
								message: "Поле может содержать одно или два слова (Кириллицей)",
							},
							required: "Введите имя",
						}}
						render={({ field }) => (
							<FormInput
								type="text"
								error={errors.name?.message}
								placeholder="Имя"
								{...field}
							/>
						)}
					/>
					<Controller
						control={control}
						name="tel"
						rules={{
							required: "Введите телефон",
							pattern: {
								value: /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/,
								message: "Введите корректный номер телефона",
							},
						}}
						render={({ field }) => (
							<FormInputPhone
								type="tel"
								error={errors.tel?.message}
								placeholder="+7 (000) 000 00 00"
								{...field}
							/>
						)}
					/>

					<FormButton>{buttonText}</FormButton>
				</Form>
			</Box>
		</Modal>
	)
}

export { FormBooking }
