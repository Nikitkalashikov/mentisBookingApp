import DoctorIcon from "../../../assets/icons/Doctor"
import { Filter } from "../Filter"

function FilterProfile({ ...props }) {
	return (
		<Filter className="active" {...props}>
			<DoctorIcon />
		</Filter>
	)
}

export { FilterProfile }
