import { BodyWrapper } from "./styled"
import { IBody } from "./type"

function Body({ children }: IBody) {
	return <BodyWrapper>{children}</BodyWrapper>
}

export { Body }
