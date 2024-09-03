interface IInput {
	type: string
	name: string
	value?: string
	placeholder?: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type { IInput }
