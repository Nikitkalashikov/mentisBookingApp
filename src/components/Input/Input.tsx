import { InputError, InputField, InputWrapper } from "./styled"
import { IInput } from "./type"
// import { useMask } from "@react-input/mask"
import { forwardRef } from "react"

const Input = forwardRef<HTMLInputElement, IInput>(
	({ error, ...props }, ref) => {
		// const inputRef = useMask({
		// 	mask: "+7 (___) ___-__-__",
		// 	replacement: { _: /\d/ },
		// })

		return (
			<InputWrapper>
				{/* {type === "tel" ? (
					<InputField {...props} ref={inputRef} type={type} />
				) : ( */}
				<InputField ref={ref} {...props} />
				{/* )} */}
				{error && <InputError>{error}</InputError>}
			</InputWrapper>
		)
	}
)

export { Input }
