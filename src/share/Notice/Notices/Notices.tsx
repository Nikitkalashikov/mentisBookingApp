import { LabelsWrapper } from "./styled"
import { INotices } from "./type"

function Notices({ children }: INotices) {
	return <LabelsWrapper>{children}</LabelsWrapper>
}

export { Notices }
