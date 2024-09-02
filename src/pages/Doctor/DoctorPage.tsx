import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
	DoctorPageBackLink,
	DoctorPageBlock,
	DoctorPageButton,
	DoctorPageCategories,
	DoctorPageThumbnail,
	DoctorPageTitle,
} from "./styled"
import { getDoctorByID, getToken } from "../../services/api"
import ArrowIcon from "../../assets/icons/Arrow"
import { Container } from "../../components/Container"
import { Body } from "../../components/Body"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

function DoctorPage() {
	const { id } = useParams<{ id: string }>()
	const [token, setToken] = useState<string | null>(null)
	const [doctor, setDoctor] = useState<any>(null)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchToken = async () => {
			try {
				const token = await getToken(USERNAME, PASSWORD)
				setToken(token)
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message)
				} else {
					setError("Неизвестная ошибка")
				}
			}
		}

		fetchToken()
	}, [])

	useEffect(() => {
		const fetchDoctor = async () => {
			if (!token) return
			try {
				if (!id) throw new Error("ID доктора не найден")
				const doctor = await getDoctorByID(token, id)
				setDoctor(doctor)
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message)
				} else {
					setError("Неизвестная ошибка")
				}
			}
		}

		fetchDoctor()
	}, [token, id])

	if (error) {
		return <div>{error}</div>
	}

	console.log(doctor)
	return (
		<Body>
			<Container>
				{!doctor ? (
					<div>Loading...</div>
				) : (
					<>
						<DoctorPageThumbnail>
							<img src={doctor.thumbnail_url} alt={doctor.fio} />
							<DoctorPageButton>Записаться</DoctorPageButton>
						</DoctorPageThumbnail>

						<DoctorPageBlock>
							<DoctorPageTitle>{doctor.fio}</DoctorPageTitle>
							{doctor.doctor_categories && (
								<DoctorPageCategories>
									{doctor.doctor_categories
										.map((category: { name: string }) => category.name)
										.join(", ")}
								</DoctorPageCategories>
							)}
						</DoctorPageBlock>

						<DoctorPageBackLink to={"/"}>
							<ArrowIcon /> К списку врачей
						</DoctorPageBackLink>
					</>
				)}
			</Container>
		</Body>
	)
}

export { DoctorPage }
