import { useState } from "react"
import { Input } from "../../Input"
import { Form } from "../Form"
import { FormButton, FormRow, FormTitle, FormDesc, FormHead } from "../styled"
import { IFormBooking } from "./type"
import { getToken, sendEmail } from "../../../services/api"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

function FormBooking({ desc }: IFormBooking) {
	const [name, setName] = useState("")
	const [tel, setTel] = useState("")

	const formReset = () => {
		setName("")
		setTel("")
	}

	const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!name || !tel) {
			console.error("Поля не могут быть пустыми")
			return
		}

		try {
			const token = await getToken(USERNAME, PASSWORD)

			const response = await sendEmail(token, {
				subject: "Новая заявка из Telegram приложения",
				fio: name,
				tel: tel,
			})

			if (response.status === true) {
				formReset()
				console.log("Ответ на заявку:", response.message)
			}
		} catch (error) {
			console.error("Ошибка при отправке заявки", error)
		}
	}

	return (
		<Form onSubmit={handleFormSubmit}>
			<FormHead>
				<FormTitle>Записаться на прием</FormTitle>
				{desc && <FormDesc>{desc}</FormDesc>}
			</FormHead>
			<FormRow>
				<Input
					type="text"
					name="fio"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setName(e.target.value)
					}
					value={name}
					placeholder="Имя"
				/>
			</FormRow>
			<FormRow>
				<Input
					type="tel"
					name="tel"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setTel(e.target.value)
					}
					value={tel}
					placeholder="Телефон"
				/>
			</FormRow>
			<FormButton>Отправить</FormButton>
		</Form>
	)
}

export { FormBooking }
