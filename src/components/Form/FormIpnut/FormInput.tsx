import React from "react"
import { Input } from "../../Input"
import { FormInputError, FormInputWrapper } from "./styles"
import { IFormInput } from "./type"

const FormInput = React.forwardRef<HTMLInputElement, IFormInput>(
	({ error, ...props }, ref) => {
		return (
			<FormInputWrapper>
				<Input ref={ref} {...props} />
				{error && <FormInputError>{error}</FormInputError>}
			</FormInputWrapper>
		)
	}
)

export { FormInput }
