import { FilterWrapper } from "./styled"
import { IFilter } from "./type"

function Filter({ data }: IFilter) {
	return <FilterWrapper>{data}</FilterWrapper>
}

export { Filter }
