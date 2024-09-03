import { InputField, InputWrapper } from "./styled"

function Input({ ...props }) {
	return (
		<InputWrapper>
			<InputField {...props} />
		</InputWrapper>
	)
}

export { Input }
