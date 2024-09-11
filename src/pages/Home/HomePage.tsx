import { Container } from "../../components/Container"
import { DoctorList } from "../../components/Doctor"
import { Filters } from "../../components/Filters"
import { Header } from "../../components/Header"
import { CreatedByWrapper, HomePageBody } from "./styled"

function HomePage() {
	return (
		<>
			<Header />
			<HomePageBody>
				<Container>
					<DoctorList />
					<CreatedByWrapper />
				</Container>
			</HomePageBody>
			<Filters />
		</>
	)
}

export { HomePage }
