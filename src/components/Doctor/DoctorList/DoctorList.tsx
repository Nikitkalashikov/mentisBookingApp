import { useEffect, useState } from "react"
import { DoctorListWrapper, DoctorListCard, DoctorListButton } from "./styled"
import { getDoctors, getToken } from "../../../services/api"

const USERNAME = process.env.VITE_USERNAME
const PASSWORD = process.env.VITE_PASSWORD

function DoctorList() {
	const [token, setToken] = useState<string | null>(null)
	const [doctors, setDoctors] = useState<any[]>([])
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
		const fetchDoctors = async () => {
			if (!token) return

			try {
				const doctorsList = await getDoctors(token)
				setDoctors(doctorsList)
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message)
				} else {
					setError("Неизвестная ошибка")
				}
			}
		}

		fetchDoctors()
	}, [token])

	if (error) {
		return <div>{error}</div>
	}

	return (
		<DoctorListWrapper>
			{doctors.map(doctor => (
				<DoctorListCard key={doctor.id}>
					{doctor.title}
					<DoctorListButton>Записаться</DoctorListButton>
				</DoctorListCard>
			))}
		</DoctorListWrapper>
	)
}

export { DoctorList }
