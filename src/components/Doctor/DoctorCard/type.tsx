interface IDoctorCard {
	id: string
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
	experience: string
	doctor_categories?: { name: string; slug: string }[]
	className: string
	education: {
		text: string
	}
	sertificates: {
		url: string
		alt: string
	}[]
	directions?: { name: string; slug: string }[]
}

export type { IDoctorCard }
