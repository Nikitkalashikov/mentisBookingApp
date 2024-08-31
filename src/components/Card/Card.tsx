interface IButton {
	children: React.ReactNode
}

function Button({ children }: IButton) {
	return <div>{children}</div>
}

export { Button }
