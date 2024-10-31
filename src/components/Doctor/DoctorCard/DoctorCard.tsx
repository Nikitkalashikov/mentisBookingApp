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
} from "./styled"
import { IDoctorCard } from "./type"

function DoctorCard({
	id,
	fio,
	thumbnail_url,
	doctor_categories,
	prices,
	experience,
	...props
}: IDoctorCard) {
	const prices_list = getMinMax(prices)
	return (
		<DoctorCardWrapper {...props}>
			<DoctorCardThumbnail to={`doctor/${id}`}>
				{thumbnail_url && <img src={thumbnail_url} alt={fio} />}
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
				{prices_list && (
					<Prices>
						{prices_list.first_pay && (
							<Price
								label="Первичный прием от "
								price={prices_list.first_pay}
							/>
						)}
						{prices_list.second_pay && (
							<Price
								label="Повторный прием от "
								price={prices_list.second_pay}
							/>
						)}
					</Prices>
				)}
				<DoctorCardButton desc={fio}>Записаться</DoctorCardButton>
			</DoctorCardBody>
		</DoctorCardWrapper>
	)
}

export { DoctorCard }
