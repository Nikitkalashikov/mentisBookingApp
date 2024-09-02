import { Body } from "../../components/Body"
import { Container } from "../../components/Container"
import { DoctorList } from "../../components/Doctor"
import { FiltersDoctor } from "../../components/Filters"
import { Header } from "../../components/Header"

function HomePage() {
	return (
		<>
			<Header />
			<Body>
				<Container>
					<DoctorList />
				</Container>
			</Body>
			<FiltersDoctor />
		</>
	)
}

export { HomePage }
