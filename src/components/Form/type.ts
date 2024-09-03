interface IForm {
	children: React.ReactNode
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export type { IForm }
