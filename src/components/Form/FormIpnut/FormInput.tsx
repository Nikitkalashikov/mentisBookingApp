import React from "react"
import { Input } from "../../Input"
import { FormInputError, FormInputWrapper } from "./styles"
import { IFormInput } from "./type"

const FormInput = React.forwardRef<HTMLInputElement, IFormInput>(
	({ error, ...props }, ref) => {
		return (
			<FormInputWrapper>
				<Input {...props} ref={ref} />
				{error && <FormInputError>{error}</FormInputError>}
			</FormInputWrapper>
		)
	}
)

export { FormInput }
