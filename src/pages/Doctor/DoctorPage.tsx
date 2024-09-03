import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
	DoctorPageBackLink,
	DoctorPageBlock,
	DoctorPageBlockContent,
	DoctorPageBlockInner,
	DoctorPageBlockTitle,
	DoctorPageBody,
	DoctorPageButtonBooking,
	DoctorPageCategories,
	DoctorPageDirections,
	DoctorPageDirectionsItem,
	DoctorPageGallery,
	DoctorPageThumbnail,
	DoctorPageTitle,
} from "./styled"
import { getDoctorByID, getToken } from "../../services/api"
import ArrowIcon from "../../assets/icons/Arrow"
import { Container } from "../../components/Container"
import { IDoctorCard } from "../../components/Doctor"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

function DoctorPage() {
	const { id } = useParams<{ id: string }>()
	const [token, setToken] = useState<string | null>(null)
	const [doctor, setDoctor] = useState<IDoctorCard>({
		id: "",
		fio: "",
		thumbnail_url: "",
		first_pay: {
			price: "",
			price_sale: "",
		},
		second_pay: {
			price: "",
			price_sale: "",
		},
		directions: [
			{
				name: "",
				slug: "",
			},
		],
		education: {
			text: "",
		},
		sertificates: [
			{
				url: "",
				alt: "",
			},
		],
		experience: "",
		className: "",
	})
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

	return (
		<DoctorPageBody>
			<Container>
				{!doctor ? (
					<p>Loading</p>
				) : (
					<>
						<DoctorPageThumbnail>
							<img src={doctor.thumbnail_url} alt={doctor.fio} />
							<DoctorPageButtonBooking desc={`Доктор: ${doctor.fio}`}>
								Записаться
							</DoctorPageButtonBooking>
						</DoctorPageThumbnail>

						<DoctorPageBlock className="focus">
							<DoctorPageTitle>{doctor.fio}</DoctorPageTitle>
							{doctor.doctor_categories && (
								<DoctorPageCategories>
									{doctor.doctor_categories
										.map((category: { name: string }) => category.name)
										.join(", ")}
								</DoctorPageCategories>
							)}
						</DoctorPageBlock>

						{doctor.directions && (
							<DoctorPageBlock className="wave1">
								<DoctorPageBlockInner>
									<DoctorPageBlockTitle>
										Работает с запросами:
									</DoctorPageBlockTitle>
									<DoctorPageDirections>
										{doctor.directions.map(
											(direction: { name: string }, index: number) => (
												<DoctorPageDirectionsItem key={index}>
													{direction.name}
												</DoctorPageDirectionsItem>
											)
										)}
									</DoctorPageDirections>
								</DoctorPageBlockInner>
							</DoctorPageBlock>
						)}

						{doctor.education.text && (
							<DoctorPageBlock>
								<DoctorPageBlockTitle>Образование:</DoctorPageBlockTitle>
								<DoctorPageBlockContent
									dangerouslySetInnerHTML={{ __html: doctor.education.text }}
								/>
							</DoctorPageBlock>
						)}

						{doctor.sertificates && (
							<DoctorPageGallery
								galleryId="sertificates"
								gallery={doctor.sertificates.map(
									(item: { url: string; alt: string }) => ({
										url: item.url,
										alt: item.alt,
									})
								)}
							/>
						)}

						<DoctorPageBackLink to={"/"}>
							<ArrowIcon /> К списку врачей
						</DoctorPageBackLink>
					</>
				)}
			</Container>
		</DoctorPageBody>
	)
}

export { DoctorPage }
