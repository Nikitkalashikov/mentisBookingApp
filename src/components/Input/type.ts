interface IInput {
	type?: string
	error?: string
	placeholder?: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type { IInput }
