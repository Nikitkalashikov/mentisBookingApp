interface IButton {
	children: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	className?: string
	onCLick?: () => void
	disabled?: boolean
}

export type { IButton }
