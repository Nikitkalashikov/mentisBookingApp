import { ContainerWrapper } from "./styled"

interface IContainer {
	children: React.ReactNode
}

function Container({ children }: IContainer) {
	return <ContainerWrapper>{children}</ContainerWrapper>
}

export { Container }
