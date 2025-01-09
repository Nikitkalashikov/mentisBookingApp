export interface IFormTextarea {
	error?: string
	value?: string
	placeholder?: string
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}
