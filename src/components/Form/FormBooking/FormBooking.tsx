import { Input } from "../../Input"
import { Form } from "../Form"
import { FormButton, FormRow, FormTitle, FormDesc, FormHead } from "../styled"
import { IFormBooking, IFormInput } from "./type"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

import { getToken, sendEmail } from "../../../services/api"
import { useState } from "react"
import { FormMessage } from "./styled"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

const schema = Yup.object().shape({
	name: Yup.string().required("Имя обязательно"),
	tel: Yup.string().required("Телефон обязателен"),
})

function FormBooking({ desc }: IFormBooking) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IFormInput>({
		resolver: yupResolver(schema),
	})

	const [isMessage, setMessage] = useState(false)
	const [response, setResponse] = useState("")

	const onSubmit: SubmitHandler<IFormInput> = async data => {
		if (!data.name || !data.tel) {
			console.error("Поля не могут быть пустыми")
			return
		}

		try {
			const token = await getToken(USERNAME, PASSWORD)

			const response = await sendEmail(token, {
				subject: "Новая заявка из Telegram приложения",
				fio: data.name,
				tel: data.tel,
			})

			if (response.status === true) {
				reset()
				setMessage(true)
				setResponse(response.message)
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
			<FormRow>
				<Input
					{...register("name")}
					error={errors.name?.message}
					placeholder="Имя"
				/>
			</FormRow>
			<FormRow>
				<Input
					type="tel"
					{...register("tel")}
					error={errors.tel?.message}
					placeholder="Телефон"
				/>
			</FormRow>
			<FormButton>Отправить</FormButton>
			{isMessage && <FormMessage>{response}</FormMessage>}
		</Form>
	)
}

export { FormBooking }
