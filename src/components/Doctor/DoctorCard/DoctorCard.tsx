import { getMinMax } from "@utils/helpers/getMinMax"
import ArrowIcon from "../../../assets/icons/Arrow"
import { Price } from "../../Price"
import { Prices } from "../../Price/Prices"
import {
	DoctorCardBody,
	DoctorCardButton,
	DoctorCardLink,
	DoctorCardWrapper,
	DoctorCardThumbnail,
	DoctorCardTitle,
	DoctorCardInfo,
	DoctorCardLocations,
	DoctorCardTypeWord,
} from "./styled"
import { IDoctorCard } from "./type"
import OfflineIcon from "@icons/Offline"
import OnlineIcon from "@icons/Online"
import { Tag } from "@components/Tag"

function DoctorCard({
	id,
	fio,
	thumbnail_url,
	doctor_categories,
	prices,
	type_work,
	clinics,
	experience,
	...props
}: IDoctorCard) {
	const prices_list = getMinMax(prices)
	return (
		<DoctorCardWrapper {...props}>
			<DoctorCardThumbnail to={`doctor/${id}`}>
				{thumbnail_url && <img src={thumbnail_url} alt={fio} />}
				{type_work && (
					<DoctorCardTypeWord>
						{type_work.map((type: { value: string; label: string }) => {
							return (
								<Tag key={type.value}>
									{type.value == "online" ? <OnlineIcon /> : <OfflineIcon />}
									{type.label}
								</Tag>
							)
						})}
					</DoctorCardTypeWord>
				)}
				<DoctorCardLink>
					Подробнее
					<ArrowIcon />
				</DoctorCardLink>
			</DoctorCardThumbnail>
			<DoctorCardBody>
				<DoctorCardTitle>{fio}</DoctorCardTitle>
				{(doctor_categories || experience) && (
					<DoctorCardInfo
						categories={doctor_categories ?? [{ name: "", slug: "" }]}
						experience={experience ?? ""}
					/>
				)}

				{clinics.length > 0 && (
					<DoctorCardLocations
						title="Принимает в клиниках:"
						addresses={clinics}
					/>
				)}

				{prices_list && (
					<Prices>
						{prices_list.first_pay && (
							<Price
								label="Первичный прием"
								price={`от ${prices_list.first_pay}`}
							/>
						)}
						{prices_list.second_pay && (
							<Price
								label="Повторный прием"
								price={`от ${prices_list.second_pay}`}
							/>
						)}
					</Prices>
				)}
				<DoctorCardButton
					formSubject={`Новая запись на прием к ${fio}`}
					formTitle="Записаться на прием"
					formDescription={`Доктор: ${fio}`}
				>
					Записаться
				</DoctorCardButton>
			</DoctorCardBody>
		</DoctorCardWrapper>
	)
}

export { DoctorCard }
