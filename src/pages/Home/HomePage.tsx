import { FormBooking, FormDiagnostic } from "@components/Form"
import { Container } from "@components/Container"
import { DoctorList } from "@components/Doctor"
import { Filters } from "@components/Filters"
import { Header } from "@components/Header"
import {
	CreatedByWrapper,
	HomePageBanner,
	HomePageBody,
	HomePageNotice,
} from "./styled"
import manager from "@img/Manager.png"
import { openFormDiagnostic } from "@store/slices/formDiagnosticSlice"
import { useDispatch } from "react-redux"

import { addToHomeScreen } from "@telegram-apps/sdk"

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
				{addToHomeScreen.isAvailable() && <HomePageNotice />}
			</Container>
			<HomePageBody>
				<Container>
					<Filters />
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
