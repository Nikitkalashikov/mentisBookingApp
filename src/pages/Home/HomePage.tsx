import { Container } from "../../components/Container"
import { DoctorList } from "../../components/Doctor"
import { Filters } from "../../components/Filters"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { CreatedByWrapper, HomePageBody } from "./styled"

function HomePage() {
	return (
		<>
			<Header />
			<Container>
				<Filters />
			</Container>
			<HomePageBody>
				<Container>
					<DoctorList />
				</Container>
			</HomePageBody>
			<Footer>
				<CreatedByWrapper />
			</Footer>
		</>
	)
}

export { HomePage }
