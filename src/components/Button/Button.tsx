interface IButton {
	children: React.ReactNode
}

import { ButtonWrapper } from "./styled"

function Button({ children, ...props }: IButton) {
	return <ButtonWrapper {...props}>{children}</ButtonWrapper>
}

export { Button }
