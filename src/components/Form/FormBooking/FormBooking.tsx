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
import CloseIcon from "@icons/Close"
import { FormBookClose } from "./styled"
import { DoctorDropdownClinics } from "@components/Doctor"
import { useState } from "react"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

function FormBooking() {
	const { tg, user } = useTelegram()

	const dispatch = useDispatch()
	const { isOpen, title, subject, description, buttonText } = useSelector(
		(state: RootState) => state.form
	)
	const [activeClinic, setActiveClinic] = useState("")

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
				clinic: activeClinic,
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

	function adjustForKeyboard() {
		const originalHeight = window.innerHeight

		const isKeyboardOpen = window.innerHeight < originalHeight
		const formElement = document.getElementById("formOrder")

		if (formElement) {
			if (isKeyboardOpen) {
				formElement.scrollIntoView({ behavior: "smooth", block: "center" })
			} else {
				formElement.style.transform = "translateY(0)"
			}
		}
	}

	function initKeyboardAdjustment() {
		tg.onEvent("viewportChanged", adjustForKeyboard)

		window.addEventListener("resize", adjustForKeyboard)
		document.querySelectorAll("input").forEach(input => {
			input.addEventListener("focus", adjustForKeyboard)
			input.addEventListener("blur", adjustForKeyboard)
		})
	}

	initKeyboardAdjustment()

	if (!isOpen) return null

	return (
		// <div open={isOpen} onClose={formCloseHandle}>
		<div
			style={{
				position: "fixed",
				left: 0,
				top: 0,
				bottom: 0,
				right: 0,
				width: "100%",
				height: "100%",
				background: "rgba(0, 0, 0, 0.2)",
				zIndex: 100,
			}}
		>
			<div
				id="formOrder"
				style={{
					position: "absolute",
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					width: "90%",
					maxWidth: 480,
					height: "fit-content",
					margin: "auto",
					background: "#ffffff",
					borderRadius: "24px",
					padding: "16px",
				}}
			>
				<FormBookClose onClick={formCloseHandle}>
					<CloseIcon />
				</FormBookClose>
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

					<DoctorDropdownClinics onChange={setActiveClinic} />

					<FormButton>{buttonText}</FormButton>
				</Form>
			</div>
		</div>
	)
}

export { FormBooking }
