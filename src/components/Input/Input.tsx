import React from "react"
import { InputField } from "./styled"

const Input = React.forwardRef<
	HTMLInputElement,
	React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
	return <InputField {...props} ref={ref} />
})

export { Input }
