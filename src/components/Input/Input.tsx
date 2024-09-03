import { InputField, InputWrapper } from "./styled"
import { IInput } from "./type"
import { useMask } from "@react-input/mask"

function Input({ type, name, ...props }: IInput) {
	const inputRef = useMask({
		mask: "+7 (___) ___-__-__",
		replacement: { _: /\d/ },
	})

	return (
		<InputWrapper>
			{type === "tel" ? ( // Проверяем тип поля
				<InputField {...props} ref={inputRef} type={type} name={name} />
			) : (
				<InputField {...props} type={type} name={name} />
			)}
		</InputWrapper>
	)
}

export { Input }
