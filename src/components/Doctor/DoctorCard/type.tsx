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

export type { IDoctorCard }
