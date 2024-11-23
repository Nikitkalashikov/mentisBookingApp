import { Button } from "@share/Button"
import { IButtonAddHomeIcon } from "./type"
import { useTelegram } from "@hooks/useTelegram"
import { useEffect } from "react"

export const ButtonAddHomeIcon = ({
	title = "Добавить",
	...props
}: IButtonAddHomeIcon) => {
	const { tg } = useTelegram()

	useEffect(() => {
		tg.ready()
	}, [])

	const addHandler = () => {
		console.log("test")
		tg.checkHomeScreenStatus(status => {
			console.log(status)
			if (status === "added") {
				tg.showAlert(`Закреплено на главном экране: ${status}`)
			} else if (status === "missed") {
				tg.addToHomeScreen()
			}
		})
	}

	return (
		<Button onClick={addHandler} {...props}>
			{title}
		</Button>
	)
}
