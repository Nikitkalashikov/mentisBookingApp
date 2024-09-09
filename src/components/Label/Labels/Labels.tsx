import { LabelsWrapper } from "./styled"
import { ILabels } from "./type"

function Labels({ children }: ILabels) {
	return <LabelsWrapper>{children}</LabelsWrapper>
}

export { Labels }
