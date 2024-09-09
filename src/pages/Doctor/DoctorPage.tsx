import { DoctorPageBackLink, DoctorPageBody } from "./styled"

import ArrowIcon from "../../assets/icons/Arrow"
import { Container } from "../../components/Container"

import { useParams } from "react-router-dom"
import { DoctorProfile } from "../../components/Doctor/DoctorProfile"
import { useEffect } from "react"

function DoctorPage() {
	const { id } = useParams<{ id: string }>()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<DoctorPageBody>
			<Container>
				<DoctorPageBackLink to={"/"}>
					<ArrowIcon /> К списку врачей
				</DoctorPageBackLink>
				{id ? <DoctorProfile id={id} /> : <div>Нет id специалиста</div>}
			</Container>
		</DoctorPageBody>
	)
}

export { DoctorPage }
