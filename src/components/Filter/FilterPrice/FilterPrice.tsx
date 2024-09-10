import CurrencyIcon from "../../../assets/icons/Currency"
import { Filter } from "../Filter"

function FilterPrice({ ...props }) {
	return (
		<Filter className="active" {...props}>
			<CurrencyIcon />
		</Filter>
	)
}

export { FilterPrice }
