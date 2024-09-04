import { useEffect, useState } from "react"
import { getDoctorByID, getToken } from "../../services/api"
import {
	UserBlock,
	UserBlockContent,
	UserBlockInner,
	UserButtonBooking,
	UserCategory,
	UserDirections,
	UserDirectionsItem,
	UserGallery,
	UserThumbnail,
	UserTitle,
	UserName,
	UserWrapper,
	UserPrice,
	UserPrices,
	UserList,
	UserExperience,
	UserGalleryWrapper,
} from "./styled"
import { IDoctorCard } from "../../components/Doctor"
import { Skeleton } from "@mui/material"
import { IUser } from "./type"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

function User({ id }: IUser) {
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
		<UserWrapper>
			<UserThumbnail>
				{doctor.thumbnail_url ? (
					<img src={doctor.thumbnail_url} alt={doctor.fio} />
				) : (
					<Skeleton variant="rounded" width="100%" height={460} />
				)}
			</UserThumbnail>

			<UserBlock className="focus info">
				<UserName>
					{doctor.fio ? (
						doctor.fio
					) : (
						<Skeleton variant="text" width="100%" height={68} />
					)}
				</UserName>
				{(doctor.doctor_categories || doctor.experience) && (
					<UserList>
						{doctor.doctor_categories &&
							doctor.doctor_categories.map(
								(category: { name: string }, index) => (
									<UserCategory key={index}>
										{category.name}
										{doctor.doctor_categories &&
											index < doctor.doctor_categories.length - 1 &&
											","}
									</UserCategory>
								)
							)}
						{doctor.experience && (
							<UserExperience>стаж {doctor.experience}</UserExperience>
						)}
					</UserList>
				)}
			</UserBlock>

			{(doctor.first_pay.price || doctor.second_pay.price) && (
				<UserPrices>
					{doctor.first_pay.price && (
						<UserPrice>
							<span>Первичный прием</span>
							{doctor.first_pay.price} ₽
						</UserPrice>
					)}
					{doctor.second_pay.price && (
						<UserPrice>
							<span>Повторный прием</span>
							{doctor.second_pay.price} ₽
						</UserPrice>
					)}
				</UserPrices>
			)}

			{doctor.directions && (
				<UserBlock className="wave1">
					<UserBlockInner>
						<UserTitle>Работает с запросами:</UserTitle>
						<UserDirections>
							{doctor.directions.map(
								(direction: { name: string }, index: number) => (
									<UserDirectionsItem key={index}>
										{direction.name}
									</UserDirectionsItem>
								)
							)}
						</UserDirections>
					</UserBlockInner>
				</UserBlock>
			)}

			{doctor.education.text ? (
				doctor.education.text && (
					<UserBlock>
						<UserTitle>Образование:</UserTitle>
						<UserBlockContent
							dangerouslySetInnerHTML={{ __html: doctor.education.text }}
						/>
					</UserBlock>
				)
			) : (
				<UserBlock>
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
				</UserBlock>
			)}

			{doctor.sertificates ? (
				doctor.sertificates && (
					<UserGalleryWrapper>
						<UserTitle>Сертификаты</UserTitle>
						<UserGallery
							galleryId="sertificates"
							gallery={doctor.sertificates.map(
								(item: { url: string; alt: string }) => ({
									url: item.url,
									alt: item.alt,
								})
							)}
						/>
					</UserGalleryWrapper>
				)
			) : (
				<>
					<Skeleton variant="rounded" width="50%" height={160} />
					<Skeleton variant="rounded" width="50%" height={160} />
				</>
			)}
			<UserButtonBooking desc={`Доктор: ${doctor.fio}`}>
				Записаться
			</UserButtonBooking>
		</UserWrapper>
	)
}

export { User }
