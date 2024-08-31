interface IButton {
	children: React.ReactNode
}

import { ButtonWrapper } from "./styled"

function Button({ children }: IButton) {
	return <ButtonWrapper>{children}</ButtonWrapper>
}

export { Button }
