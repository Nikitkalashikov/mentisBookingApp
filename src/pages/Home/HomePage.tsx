import { Container } from "../../components/Container"
import { DoctorList } from "../../components/Doctor"
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
		</>
	)
}

export { HomePage }
