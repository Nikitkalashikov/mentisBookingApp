import {
	DoctorProfileBlock,
	DoctorProfileBlockContent,
	DoctorProfileBlockInner,
	DoctorProfileButtonBooking,
	DoctorProfileDirections,
	DoctorProfileDirectionsItem,
	DoctorProfileGallery,
	DoctorProfileThumbnail,
	DoctorProfileTitle,
	DoctorProfileName,
	DoctorProfileWrapper,
	DoctorProfileGalleryWrapper,
	DoctorProfileInfo,
} from "./styled"

import { IDoctorProfile } from "./type"
import { useDoctorByID } from "../../../hooks/useDoctorByID"
import { DoctorProfileSkeleton } from "./DoctorProfileSkeleton"
import { Price } from "../../Price"
import { Prices } from "../../Price/Prices"

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
					<DoctorProfileInfo
						categories={doctor.doctor_categories ?? [{ name: "", slug: "" }]}
						experience={doctor.experience ?? ""}
					/>
				)}
			</DoctorProfileBlock>

			{(doctor.first_pay.price || doctor.second_pay.price) && (
				<Prices>
					{doctor.first_pay.price && (
						<Price label="Первичный прием" price={doctor.first_pay.price} />
					)}
					{doctor.second_pay.price && (
						<Price label="Повторный прием" price={doctor.second_pay.price} />
					)}
				</Prices>
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

			{doctor.sertificates.length > 0 && (
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
				<DoctorProfileButtonBooking desc={doctor.fio}>
					Записаться
				</DoctorProfileButtonBooking>
			)}
		</DoctorProfileWrapper>
	)
}

export { DoctorProfile }
