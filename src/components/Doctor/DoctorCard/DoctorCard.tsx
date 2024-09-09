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
	first_pay,
	second_pay,
	experience,
	...props
}: IDoctorCard) {
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
				{(first_pay || second_pay) && (
					<Prices>
						{first_pay && (
							<Price label="Первичный прием:" price={first_pay.price} />
						)}
						{second_pay && (
							<Price label="Повторный прием:" price={second_pay.price} />
						)}
					</Prices>
				)}
				<DoctorCardButton desc={fio}>Записаться</DoctorCardButton>
			</DoctorCardBody>
		</DoctorCardWrapper>
	)
}

export { DoctorCard }
