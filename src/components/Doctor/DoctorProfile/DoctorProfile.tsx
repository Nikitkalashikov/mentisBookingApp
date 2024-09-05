import { useEffect, useState } from "react"
import { getDoctorByID, getToken } from "../../../services/api"
import {
	DoctorProfileBlock,
	DoctorProfileBlockContent,
	DoctorProfileBlockInner,
	DoctorProfileButtonBooking,
	DoctorProfileCategory,
	DoctorProfileDirections,
	DoctorProfileDirectionsItem,
	DoctorProfileGallery,
	DoctorProfileThumbnail,
	DoctorProfileTitle,
	DoctorProfileName,
	DoctorProfileWrapper,
	DoctorProfilePrice,
	DoctorProfilePrices,
	DoctorProfileList,
	DoctorProfileExperience,
	DoctorProfileGalleryWrapper,
} from "./styled"
import { IDoctorCard } from "../DoctorCard"
import { Skeleton } from "@mui/material"
import { IDoctorProfile } from "./type"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

function DoctorProfile({ id }: IDoctorProfile) {
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

	console.log(doctor)
	return (
		<DoctorProfileWrapper>
			<DoctorProfileThumbnail>
				{doctor.thumbnail_url ? (
					<img src={doctor.thumbnail_url} alt={doctor.fio} />
				) : (
					<Skeleton variant="rounded" width="100%" height={460} />
				)}
			</DoctorProfileThumbnail>

			<DoctorProfileBlock className="focus info">
				<DoctorProfileName>
					{doctor.fio ? (
						doctor.fio
					) : (
						<Skeleton variant="text" width="100%" height={68} />
					)}
				</DoctorProfileName>
				{(doctor.doctor_categories || doctor.experience) && (
					<DoctorProfileList>
						{doctor.doctor_categories &&
							doctor.doctor_categories.map(
								(category: { name: string }, index) => (
									<DoctorProfileCategory key={index}>
										{category.name}
										{doctor.doctor_categories &&
											index < doctor.doctor_categories.length - 1 &&
											","}
									</DoctorProfileCategory>
								)
							)}
						{doctor.experience && (
							<DoctorProfileExperience>
								стаж {doctor.experience}
							</DoctorProfileExperience>
						)}
					</DoctorProfileList>
				)}
			</DoctorProfileBlock>

			{(doctor.first_pay.price || doctor.second_pay.price) && (
				<DoctorProfilePrices>
					{doctor.first_pay.price && (
						<DoctorProfilePrice>
							<span>Первичный прием</span>
							{doctor.first_pay.price} ₽
						</DoctorProfilePrice>
					)}
					{doctor.second_pay.price && (
						<DoctorProfilePrice>
							<span>Повторный прием</span>
							{doctor.second_pay.price} ₽
						</DoctorProfilePrice>
					)}
				</DoctorProfilePrices>
			)}

			{doctor.directions && (
				<DoctorProfileBlock className="wave1">
					<DoctorProfileBlockInner>
						<DoctorProfileTitle>Работает с запросами:</DoctorProfileTitle>
						<DoctorProfileDirections>
							{doctor.directions.map(
								(direction: { name: string }, index: number) => (
									<DoctorProfileDirectionsItem key={index}>
										{direction.name}
									</DoctorProfileDirectionsItem>
								)
							)}
						</DoctorProfileDirections>
					</DoctorProfileBlockInner>
				</DoctorProfileBlock>
			)}

			{doctor.education.text ? (
				doctor.education.text && (
					<DoctorProfileBlock>
						<DoctorProfileTitle>Образование:</DoctorProfileTitle>
						<DoctorProfileBlockContent
							dangerouslySetInnerHTML={{ __html: doctor.education.text }}
						/>
					</DoctorProfileBlock>
				)
			) : (
				<DoctorProfileBlock>
					<Skeleton variant="text" width="100%" height={40} />
					<Skeleton variant="text" width="100%" height={40} />
					<Skeleton variant="text" width="100%" height={40} />
					<Skeleton variant="text" width="100%" height={40} />
					<Skeleton variant="text" width="100%" height={40} />
					<Skeleton variant="text" width="100%" height={40} />
					<Skeleton variant="text" width="100%" height={40} />
					<Skeleton variant="text" width="100%" height={40} />
					<Skeleton variant="text" width="100%" height={40} />
					<Skeleton variant="text" width="100%" height={40} />
				</DoctorProfileBlock>
			)}

			{doctor.sertificates ? (
				doctor.sertificates && (
					<DoctorProfileGalleryWrapper>
						<DoctorProfileTitle>Сертификаты</DoctorProfileTitle>
						<DoctorProfileGallery
							galleryId="sertificates"
							gallery={doctor.sertificates.map(
								(item: { url: string; alt: string }) => ({
									url: item.url,
									alt: item.alt,
								})
							)}
						/>
					</DoctorProfileGalleryWrapper>
				)
			) : (
				<>
					<Skeleton variant="rounded" width="50%" height={160} />
					<Skeleton variant="rounded" width="50%" height={160} />
				</>
			)}
			<DoctorProfileButtonBooking desc={`Доктор: ${doctor.fio}`}>
				Записаться
			</DoctorProfileButtonBooking>
		</DoctorProfileWrapper>
	)
}

export { DoctorProfile }
