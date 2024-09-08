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

import { IDoctorProfile } from "./type"
import { useDoctorByID } from "../../../hooks/useDoctorByID"
import { DoctorProfileSkeleton } from "./DoctorProfileSkeleton"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

function DoctorProfile({ id }: IDoctorProfile) {
	const {
		data: doctor,
		isLoading,
		isError,
		error,
	} = useDoctorByID(USERNAME, PASSWORD, id)

	if (isError) {
		return <div>{error.message}</div>
	}

	if (isLoading || !doctor) {
		return <DoctorProfileSkeleton />
	}

	console.log(doctor)
	return (
		<DoctorProfileWrapper>
			{doctor.thumbnail_url && (
				<DoctorProfileThumbnail>
					{<img src={doctor.thumbnail_url} alt={doctor.fio} />}
				</DoctorProfileThumbnail>
			)}

			<DoctorProfileBlock className="focus info">
				{doctor.fio && <DoctorProfileName>{doctor.fio}</DoctorProfileName>}
				{(doctor.doctor_categories || doctor.experience) && (
					<DoctorProfileList>
						{doctor.doctor_categories &&
							doctor.doctor_categories.map(
								(category: { name: string }, index: number) => (
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

			{doctor.education.text && (
				<DoctorProfileBlock>
					<DoctorProfileTitle>Образование:</DoctorProfileTitle>
					<DoctorProfileBlockContent
						dangerouslySetInnerHTML={{ __html: doctor.education.text }}
					/>
				</DoctorProfileBlock>
			)}

			{doctor.sertificates && (
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
			)}
			{doctor.fio && (
				<DoctorProfileButtonBooking desc={`Доктор: ${doctor.fio}`}>
					Записаться
				</DoctorProfileButtonBooking>
			)}
		</DoctorProfileWrapper>
	)
}

export { DoctorProfile }
