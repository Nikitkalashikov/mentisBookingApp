import React from "react"

export interface IOption {
	slug: string
	value: string
}

export interface IDropdown {
	icon?: React.ReactNode
	placeholder: string
	options: IOption[]
}
