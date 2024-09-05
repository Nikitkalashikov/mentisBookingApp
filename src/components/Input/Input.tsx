import React from "react"
import { InputField } from "./styled"

const Input = React.forwardRef<
	HTMLInputElement,
	React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
	return <InputField ref={ref} {...props} />
})

export { Input }
