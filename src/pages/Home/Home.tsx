import { DoctorList } from "../../components/Doctor"
import { FiltersDoctor } from "../../components/Filters"

function HomePage() {
	return (
		<>
			<DoctorList />
			<FiltersDoctor />
		</>
	)
}

export { HomePage }
