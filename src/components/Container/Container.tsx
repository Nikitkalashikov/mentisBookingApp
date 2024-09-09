import { ContainerWrapper } from "./styled"

interface IContainer {
	children: React.ReactNode
}

function Container({ children, ...props }: IContainer) {
	return <ContainerWrapper {...props}>{children}</ContainerWrapper>
}

export { Container }
