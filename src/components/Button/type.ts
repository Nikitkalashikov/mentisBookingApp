interface IButton {
	children: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	className?: string
	onCLick?: () => void
}

export type { IButton }
