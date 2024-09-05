import { DoctorPageBackLink, DoctorPageBody } from "./styled"

import ArrowIcon from "../../assets/icons/Arrow"
import { Container } from "../../components/Container"

import { useParams } from "react-router-dom"
import { DoctorProfile } from "../../components/Doctor/DoctorProfile"

function DoctorPage() {
	const { id } = useParams<{ id: string }>()

	return (
		<DoctorPageBody>
			<Container>
				<DoctorPageBackLink to={"/"}>
					<ArrowIcon /> К списку врачей
				</DoctorPageBackLink>
				<DoctorProfile id={id} />
			</Container>
		</DoctorPageBody>
	)
}

export { DoctorPage }
