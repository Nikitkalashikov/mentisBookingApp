import { Form } from "../Form"
import {
	FormButton,
	FormTitle,
	FormDesc,
	FormHead,
	FormMessage,
} from "../styled"
import { IFormBooking } from "./type"
import { InputMask, type MaskEvent } from "@react-input/mask"
import { validationSchema } from "../../../utils/validationSchema"

import { getToken, sendEmail } from "../../../services/api"
import { useState } from "react"
import { FormInput } from "../FormIpnut"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

function FormBooking({ desc }: IFormBooking) {
	const [formData, setFormData] = useState({ name: "", tel: "" })
	const [errors, setErrors] = useState({ name: "", tel: "" })
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [response, setResponse] = useState(false)

	const sendMessage = async () => {
		try {
			const token = await getToken(USERNAME, PASSWORD)

			const response = await sendEmail(token, {
				subject: "Новая заявка из Telegram приложения",
				fio: formData.name,
				tel: formData.tel,
			})

			if (response.status === true) {
				setFormData({ name: "", tel: "" })
				setIsSubmitted(true)
				setResponse(response.message)
				console.log("Ответ на заявку:", response.message)
			}
		} catch (error) {
			console.error("Ошибка при отправке заявки", error)
		}
	}

	const handleChange = (event: MaskEvent) => {
		const { name, value } = event.target

		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			setErrors({ name: "", tel: "" })

			await validationSchema.validate(formData, { abortEarly: false })

			sendMessage()
		} catch (err: any) {
			const newErrors: any = {}

			if (err.inner) {
				err.inner.forEach((validationError: any) => {
					newErrors[validationError.path] = validationError.message
				})
			}

			setErrors(newErrors)
		}
	}

	return (
		<Form onSubmit={handleSubmit}>
			<FormHead>
				<FormTitle>Записаться на прием</FormTitle>
				{desc && <FormDesc>{desc}</FormDesc>}
			</FormHead>
			<FormInput
				type="text"
				placeholder="Имя"
				name="name"
				error={errors.name}
				// onChange={handleChange}
			/>

			<InputMask
				component={FormInput}
				mask="+7 (___) ___-__-__"
				replacement={{ _: /\d/ }}
				name="tel"
				type="tel"
				showMask
				error={errors.tel}
				onMask={handleChange}
			/>
			<FormButton>Отправить</FormButton>
			{isSubmitted && <FormMessage>{response}</FormMessage>}
		</Form>
	)
}

export { FormBooking }
