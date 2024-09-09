import { LabelWrapper } from "./styled"
import { ILabel } from "./type"

function Label({ children }: ILabel) {
	return <LabelWrapper>{children}</LabelWrapper>
}

export { Label }
