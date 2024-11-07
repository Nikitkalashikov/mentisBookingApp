type Price = {
	profile: string
	first_pay?: number
	first_pay_sale?: number
	second_pay?: number
	second_pay_sale?: number
}

interface IDoctorCard {
	id: string
	fio: string
	thumbnail_url: string
	prices: Price[]
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
	clinics: {
		slug: string
		title: string
	}[]
	type_work: {
		value: string
		label: string
	}[]
	directions?: { name: string; slug: string }[]
}

export type { IDoctorCard }
