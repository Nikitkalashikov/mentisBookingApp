import { Button } from "@share/Button"
import { IButtonAddHomeIcon } from "./type"
import { useTelegram } from "@hooks/useTelegram"
import { useEffect } from "react"

export const ButtonAddHomeIcon = ({
	className,
	title = "Добавить",
	...props
}: IButtonAddHomeIcon) => {
	const { tg } = useTelegram()

	useEffect(() => {
		tg.ready()
	}, [])

	const addHandler = () => {
		tg.checkHomeScreenStatus(status => {
			if (status === "added") {
				tg.showAlert(`Закреплено на главном экране: ${status}`)
			} else if (status === "missed") {
				tg.addToHomeScreen()
			}
		})
	}

	return (
		<Button className={className} onClick={addHandler} {...props}>
			{title}
		</Button>
	)
}
