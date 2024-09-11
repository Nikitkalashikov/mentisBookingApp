import React, { createContext, useState } from "react"
import { FilterContextType } from "./type"

export const FilterContext = createContext<FilterContextType | undefined>(
	undefined
)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
	const [category, setCategory] = useState<string | null>(null)
	const [price, setPrice] = useState<number | null>(null)

	return (
		<FilterContext.Provider value={{ category, price, setCategory, setPrice }}>
			{children}
		</FilterContext.Provider>
	)
}
