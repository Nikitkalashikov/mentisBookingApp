import {
	DoctorProfileBlock,
	DoctorProfileBlockContent,
	DoctorProfileBlockInner,
	// DoctorProfileButtonBooking,
	DoctorProfileDirections,
	DoctorProfileDirectionsItem,
	DoctorProfileGallery,
	DoctorProfileThumbnail,
	DoctorProfileTitle,
	DoctorProfileName,
	DoctorProfileWrapper,
	DoctorProfileGalleryWrapper,
	DoctorProfileInfo,
	DoctorProfilePrices,
	DoctorProfilePricesContainer,
	DoctorProfileLocations,
	DoctorProfileTypeWord,
} from "./styled"

import { IDoctorProfile } from "./type"
import { useDoctorByID } from "../../../hooks/useDoctorByID"
import { DoctorProfileSkeleton } from "./DoctorProfileSkeleton"
import { Price } from "../../Price"
import { Prices } from "../../Price/Prices"
import OnlineIcon from "@icons/Online"
import OfflineIcon from "@icons/Offline"
// import { Footer } from "../../Footer"
import { Tag } from "@components/Tag"
import { useTelegram } from "@hooks/useTelegram"
import { WaveIcon } from "@icons/Wave"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

function DoctorProfile({ id }: IDoctorProfile) {
	const {
		data: doctor,
		isLoading,
		isError,
		error,
	} = useDoctorByID(USERNAME, PASSWORD, id)

	const { tg } = useTelegram()

	if (isError) {
		return <div>{error.message}</div>
	}

	if (isLoading || !doctor) {
		return <DoctorProfileSkeleton />
	}

	if (tg && tg.MainButton) {
		tg.MainButton.show()
		tg.MainButton.setText("Записаться")
		tg.MainButton.setParams({
			color: "#1597bb",
			text_color: "#ffffff",
		})
		tg.MainButton.onClick(() => {
			tg.showAlert("Кнопка нажата")
		})
	} else {
		console.error("MainButton не доступен")
	}

	return (
		<DoctorProfileWrapper>
			{doctor.thumbnail_url && (
				<DoctorProfileThumbnail>
					{<img src={doctor.thumbnail_url} alt={doctor.fio} />}
				</DoctorProfileThumbnail>
			)}
			<DoctorProfileBlock className="gradient middle">
				{doctor.fio && <DoctorProfileName>{doctor.fio}</DoctorProfileName>}
				{(doctor.doctor_categories || doctor.experience) && (
					<DoctorProfileInfo
						categories={doctor.doctor_categories ?? [{ name: "", slug: "" }]}
						experience={doctor.experience ?? ""}
					/>
				)}

				{doctor.clinics.length > 0 && (
					<DoctorProfileLocations
						title="Принимает в клиниках:"
						addresses={doctor.clinics}
					/>
				)}
				{doctor.type_work && (
					<DoctorProfileTypeWord>
						{doctor.type_work.map((type: { value: string; label: string }) => {
							return (
								<Tag key={type.value}>
									{type.value == "online" ? <OnlineIcon /> : <OfflineIcon />}
									{type.label}
								</Tag>
							)
						})}
					</DoctorProfileTypeWord>
				)}
			</DoctorProfileBlock>
			{doctor.prices && (
				<DoctorProfileBlock className="focus">
					{[doctor.prices].map(
						(price: {
							profile: string
							first_pay: string
							second_pay: string
						}) => (
							<DoctorProfilePricesContainer key={price.profile}>
								{price.profile && <p className="title">{price.profile}</p>}
								<DoctorProfilePrices>
									<Prices>
										{price.first_pay && (
											<Price label="Первичный прием" price={price.first_pay} />
										)}
										{price.second_pay && (
											<Price label="Повторный прием" price={price.second_pay} />
										)}
									</Prices>
								</DoctorProfilePrices>
							</DoctorProfilePricesContainer>
						)
					)}
				</DoctorProfileBlock>
			)}

			{doctor.directions && (
				<DoctorProfileBlock>
					<div className="wave1">
						<WaveIcon />
					</div>
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
			{/* {doctor.fio && (
				<Footer>
					<DoctorProfileButtonBooking desc={doctor.fio}>
						Записаться
					</DoctorProfileButtonBooking>
				</Footer>
			)} */}
		</DoctorProfileWrapper>
	)
}

export { DoctorProfile }
