import ArrowIcon from "../../../assets/icons/Arrow"
import {
	DoctorCardBody,
	DoctorCardButton,
	DoctorCardLink,
	DoctorCardWrapper,
	DoctorCardThumbnail,
	DoctorCardTitle,
	DoctorCardCategories,
	DoctorCardPaymentItem,
	DoctorCardPayment,
	DoctorCardExperience,
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
				<img src={thumbnail_url} alt={fio} />
				<DoctorCardLink>
					Подробнее
					<ArrowIcon />
				</DoctorCardLink>
			</DoctorCardThumbnail>
			<DoctorCardBody>
				<DoctorCardTitle>{fio}</DoctorCardTitle>
				{doctor_categories && (
					<DoctorCardCategories>
						{doctor_categories.map(category => category.name).join(", ")}
					</DoctorCardCategories>
				)}

				{experience && (
					<DoctorCardExperience>{experience}</DoctorCardExperience>
				)}

				{(first_pay || second_pay) && (
					<DoctorCardPayment>
						{first_pay && (
							<DoctorCardPaymentItem>
								<span>Первичный прием:</span>
								<p>{first_pay.price} ₽</p>
							</DoctorCardPaymentItem>
						)}
						{second_pay && (
							<DoctorCardPaymentItem>
								<span>Повторный прием:</span>
								<p>{second_pay.price} ₽</p>
							</DoctorCardPaymentItem>
						)}
					</DoctorCardPayment>
				)}
				<DoctorCardButton>Записаться</DoctorCardButton>
			</DoctorCardBody>
		</DoctorCardWrapper>
	)
}

export { DoctorCard }
