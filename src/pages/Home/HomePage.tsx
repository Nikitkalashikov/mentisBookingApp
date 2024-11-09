import { FormBooking, FormDiagnostic } from "@components/Form"
import { Container } from "@components/Container"
import { DoctorList } from "@components/Doctor"
import { Filters } from "@components/Filters"
import { Header } from "@components/Header"
import { CreatedByWrapper, HomePageBanner, HomePageBody } from "./styled"
import manager from "@img/Manager.png"
import { openFormDiagnostic } from "@store/slices/formDiagnosticSlice"
import { useDispatch } from "react-redux"

function HomePage() {
	const dispatch = useDispatch()

	const formDiagnosticHandle = () => {
		dispatch(openFormDiagnostic())
	}

	return (
		<>
			<Header />
			<Container>
				<HomePageBanner
					onClick={formDiagnosticHandle}
					desc="Пройдите бесплатно"
					title="Предварительную консультацию"
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
			<FormDiagnostic />
		</>
	)
}

export { HomePage }
