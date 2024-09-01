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
} from "./styled"
import { IDoctorCard } from "./type"

function DoctorCard({
	fio,
	thumbnail_url,
	doctor_categories,
	first_pay,
	second_pay,
	...props
}: IDoctorCard) {
	return (
		<DoctorCardWrapper {...props}>
			<DoctorCardThumbnail>
				<img src={thumbnail_url} alt={fio} />
				<DoctorCardLink>Подробнее</DoctorCardLink>
			</DoctorCardThumbnail>
			<DoctorCardBody>
				<DoctorCardTitle>{fio}</DoctorCardTitle>
				{doctor_categories && (
					<DoctorCardCategories>
						{doctor_categories.map(category => category.name).join(", ")}
					</DoctorCardCategories>
				)}

				{(first_pay || second_pay) && (
					<DoctorCardPayment>
						{first_pay && (
							<DoctorCardPaymentItem>
								Первичный прием:
								{first_pay.price}
							</DoctorCardPaymentItem>
						)}
						{second_pay && (
							<DoctorCardPaymentItem>
								Повторный прием:
								{second_pay.price}
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
