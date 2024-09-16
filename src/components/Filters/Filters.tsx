import { FilterCategory } from "../Filter"
import { FilterWrapper } from "./styled"

function Filters({ ...props }) {
	return (
		<FilterWrapper {...props}>
			<FilterCategory />
		</FilterWrapper>
	)
}

export { Filters }
