import { ButtonWrapper } from "./styled"
import { IButton } from "./type"

function Button({ children, ...props }: IButton) {
	return <ButtonWrapper {...props}>{children}</ButtonWrapper>
}

export { Button }
