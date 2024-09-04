import { DoctorPageBackLink, DoctorPageBody } from "./styled"

import ArrowIcon from "../../assets/icons/Arrow"
import { Container } from "../../components/Container"

import { User } from "../../components/User"
import { useParams } from "react-router-dom"

function DoctorPage() {
	const { id } = useParams<{ id: string }>()

	return (
		<DoctorPageBody>
			<Container>
				<DoctorPageBackLink to={"/"}>
					<ArrowIcon /> К списку врачей
				</DoctorPageBackLink>
				<User id={id} />
			</Container>
		</DoctorPageBody>
	)
}

export { DoctorPage }
