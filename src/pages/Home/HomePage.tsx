import { FormBooking } from "@components/Form"
import { Container } from "@components/Container"
import { DoctorList } from "@components/Doctor"
import { Filters } from "@components/Filters"
import { Header } from "@components/Header"
import { CreatedByWrapper, HomePageBanner, HomePageBody } from "./styled"
import manager from "@img/Manager.png"

function HomePage() {
	return (
		<>
			<Header />
			<Container>
				<HomePageBanner
					title="Предварительную консультацию"
					desc="Пройдите бесплатно"
					image={manager}
				/>
				<Filters />
			</Container>
			<HomePageBody>
				<Container>
					<DoctorList />
				</Container>
			</HomePageBody>
			<CreatedByWrapper />
			<FormBooking />
		</>
	)
}

export { HomePage }
