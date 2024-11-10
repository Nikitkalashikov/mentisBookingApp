import React from "react"

export interface IOption {
	title: string
	slug: string
}

export interface IDropdown {
	icon?: React.ReactNode
	current: {
		title: string
		slug: string
	}
	options: IOption[]
	onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}
