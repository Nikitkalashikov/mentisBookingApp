import { DoctorPageBackLink, DoctorPageBody } from "./styled"

import ArrowIcon from "../../assets/icons/Arrow"
import { Container } from "@components/Container"

import { useParams } from "react-router-dom"
import { DoctorProfile } from "@components/Doctor/DoctorProfile"
import { useEffect } from "react"
import { FormBooking } from "@components/Form"

function DoctorPage() {
	const { id } = useParams<{ id: string }>()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	if (!id) {
		return <div>ID специалиста не найден</div>
	}

	return (
		<>
			<DoctorPageBody>
				<Container>
					<DoctorPageBackLink to={"/"}>
						<ArrowIcon /> Все врачи
					</DoctorPageBackLink>
					{id ? <DoctorProfile id={id} /> : <div>Специалист не найден</div>}
				</Container>
			</DoctorPageBody>
			<FormBooking />
		</>
	)
}

export { DoctorPage }
