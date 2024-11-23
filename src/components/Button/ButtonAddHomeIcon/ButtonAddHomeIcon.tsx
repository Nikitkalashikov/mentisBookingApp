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
			switch (status) {
				case "unsupported":
					tg.showAlert(
						"Добавление на главный экран не поддерживается, версия приложения должна быть не ниже 8.0."
					)
					break
				case "unknown":
					console.log(
						"Можно добавить на главный экран, но невозможно определить, добавлено ли уже."
					)
					tg.addToHomeScreen()
					break
				case "added":
					tg.showAlert("Иконка уже добавлена на главный экран телефона.")
					break
				case "missed":
					tg.addToHomeScreen()
					break
			}
		})
	}

	return (
		<Button className={className} onClick={addHandler} {...props}>
			{title}
		</Button>
	)
}
