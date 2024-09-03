import { Input } from "../../Input"
import { Form } from "../Form"
import { FormButton, FormRow, FormTitle, FormDesc, FormHead } from "../styled"
import { IFormBooking } from "./type"

function FormBooking({ desc }: IFormBooking) {
	return (
		<Form>
			<FormHead>
				<FormTitle>Записаться на прием</FormTitle>
				{desc && <FormDesc>{desc}</FormDesc>}
			</FormHead>
			<FormRow>
				<Input type="text" name="fio" placeholder="Имя" />
			</FormRow>
			<FormRow>
				<Input type="tel" name="tel" placeholder="Телефон" />
			</FormRow>
			<FormButton>Отправить</FormButton>
		</Form>
	)
}

export { FormBooking }
