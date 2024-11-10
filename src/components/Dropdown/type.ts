import React from "react"

export interface IOption {
	value: string
	title: string
}

export interface IDropdown {
	icon?: React.ReactNode
	current: {
		title: string
		value: string
	}
	options: IOption[]
	onChange: (e: React.MouseEvent<HTMLDivElement>) => void
}
