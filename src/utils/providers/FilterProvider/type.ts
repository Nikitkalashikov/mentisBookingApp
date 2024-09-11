type FilterContextType = {
	category: string | null
	price: number | null
	setCategory: (category: string) => void
	setPrice: (price: number) => void
}

export type { FilterContextType }
