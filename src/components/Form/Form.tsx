import { FormHtml } from "./styled"
import { IForm } from "./type"

function Form({ children }: IForm) {
	return <FormHtml action="#">{children}</FormHtml>
}

export { Form }
