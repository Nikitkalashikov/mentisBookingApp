import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
	DoctorPageBackLink,
	DoctorPageTitle,
	DoctorPageWrapper,
} from "./styled"
import { getDoctorByID, getToken } from "../../services/api"
import ArrowIcon from "../../assets/icons/Arrow"

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

	if (!doctor) return <div>Loading...</div>

	console.log(doctor)
	return (
		<DoctorPageWrapper>
			<DoctorPageTitle>{doctor.title.rendered}</DoctorPageTitle>
			<DoctorPageBackLink to={"/"}>
				<ArrowIcon /> К списку врачей
			</DoctorPageBackLink>
		</DoctorPageWrapper>
	)
}

export { DoctorPage }
