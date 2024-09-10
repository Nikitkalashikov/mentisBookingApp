import { FilterWrapper } from "./styled"
import { IFilter } from "./type"

function Filter({ children, ...props }: IFilter) {
	return <FilterWrapper {...props}>{children}</FilterWrapper>
}

export { Filter }
