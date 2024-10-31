import React from "react"
import { InputPhoneField } from "../styled"

const InputPhone = React.forwardRef<
	HTMLInputElement,
	React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
	return (
		<InputPhoneField
			mask="+7 (___) ___-__-__"
			replacement={{ _: /\d/ }}
			{...props}
			ref={ref}
		/>
	)
})

export { InputPhone }
