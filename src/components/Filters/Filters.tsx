import { FiltersWrapper } from "./styled"
import { IFilters } from "./type"

function Filters({ children, ...props }: IFilters) {
	return <FiltersWrapper {...props}>{children}</FiltersWrapper>
}

export { Filters }
