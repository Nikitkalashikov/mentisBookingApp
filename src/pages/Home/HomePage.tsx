import { Body } from "../../components/Body"
import { Container } from "../../components/Container"
import { DoctorList } from "../../components/Doctor"
import { FiltersDoctor } from "../../components/Filters"
import { Header } from "../../components/Header"
import { CreatedByWrapper } from "./styled"

function HomePage() {
	return (
		<>
			<Header />
			<Body>
				<Container>
					<DoctorList />
					<CreatedByWrapper />
				</Container>
			</Body>
			<FiltersDoctor />
		</>
	)
}

export { HomePage }
