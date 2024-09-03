import { FormHtml } from "./styled"
import { IForm } from "./type"

function Form({ children, ...props }: IForm) {
	return (
		<FormHtml action="#" {...props}>
			{children}
		</FormHtml>
	)
}

export { Form }
