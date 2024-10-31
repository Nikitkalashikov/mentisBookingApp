import React from "react"
import { InputPhone } from "@components/Input"
import { FormInputError, FormInputWrapper } from "../styles"
import { IFormInput } from "../type"

const FormInputPhone = React.forwardRef<HTMLInputElement, IFormInput>(
	({ error, ...props }, ref) => {
		return (
			<FormInputWrapper>
				<InputPhone {...props} ref={ref} />
				{error && <FormInputError>{error}</FormInputError>}
			</FormInputWrapper>
		)
	}
)

export { FormInputPhone }
