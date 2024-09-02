import { FiltersWrapper } from "./styled"
import { IFilters } from "./type"

function Filters({ children }: IFilters) {
	return <FiltersWrapper>{children}</FiltersWrapper>
}

export { Filters }
