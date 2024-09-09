import { useState } from "react"
import { Form } from "../Form"
import {
	FormButton,
	FormTitle,
	FormDesc,
	FormHead,
	FormMessage,
} from "../styled"
import { IFormBooking, IFormBookingInputs } from "./type"

import { getToken, sendEmail } from "../../../services/api"
import { FormInput } from "../FormIpnut"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useTelegram } from "../../../hooks/useTelegram"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

function FormBooking({ desc }: IFormBooking) {
	const { user } = useTelegram()

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

	const [isSubmitted, setIsSubmitted] = useState(false)
	const [response, setResponse] = useState("")

	const onSubmit: SubmitHandler<IFormBookingInputs> = async formData => {
		console.log(formData)

		try {
			const token = await getToken(USERNAME, PASSWORD)

			const response = await sendEmail(token, {
				subject: "Новая заявка из Telegram приложения",
				fio: formData.name,
				tel: formData.tel,
			})

			if (response.status === true) {
				setResponse(response.message)
				setIsSubmitted(true)
				reset()
				console.log("Ответ на заявку:", response.message)
			}
		} catch (error) {
			console.error("Ошибка при отправке заявки", error)
		}
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormHead>
				<FormTitle>Записаться на прием</FormTitle>
				{desc && <FormDesc>{desc}</FormDesc>}
			</FormHead>
			<Controller
				control={control}
				name="name"
				rules={{
					minLength: {
						value: 3,
						message: "Имя должно содержаить больше 3 символов",
					},
					pattern: /^[А-Яа-я]+$/i,
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
						value:
							/^(\+7|8)?[\s-]?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
						message: "Введите корректный номер телефона",
					},
				}}
				render={({ field }) => (
					<FormInput
						type="tel"
						error={errors.tel?.message}
						placeholder="+7 (000) 000 00 00"
						{...field}
					/>
				)}
			/>

			<FormButton>Отправить</FormButton>
			{isSubmitted && <FormMessage>{response}</FormMessage>}
		</Form>
	)
}

export { FormBooking }
