import { DoctorBody, DoctorCardWrapper, DoctorThumbnail } from "./styled"

interface IDoctorCard {
	fio: string
	thumbnail_url: string
	first_pay: {
		price: string
		price_sale: string
	}
	second_pay: {
		price: string
		price_sale: string
	}
	doctor_categories: []
	children: React.ReactNode
}

function DoctorCard({ fio, thumbnail_url, children }: IDoctorCard) {
	return (
		<DoctorCardWrapper>
			<DoctorThumbnail>
				<img src={thumbnail_url} alt={fio} />
			</DoctorThumbnail>
			<DoctorBody>
				<p className="h2">{fio}</p>
				{children}
			</DoctorBody>
		</DoctorCardWrapper>
	)
}

export { DoctorCard }
