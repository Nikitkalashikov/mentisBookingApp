import { BodyWrapper } from "./styled"
import { IBody } from "./type"

function Body({ children, ...props }: IBody) {
	return <BodyWrapper {...props}>{children}</BodyWrapper>
}

export { Body }
