import axios from "axios"
import { useTelegram } from "./useTelegram"

export const useAnalytics = () => {
	const { tg, user } = useTelegram()

	if (tg && user) {
		const GOOGLESHEETS = import.meta.env.FTMA_GOOGLESHEETS

		const startParam = tg.initDataUnsafe?.start_param

		const params: { [key: string]: string } = {}

		if (startParam) {
			const paramsArray = startParam.split("__")

			paramsArray.forEach(param => {
				const [key, value] = param.split("-")
				params[key] = value
			})
		}

		const newRow = {
			sheet_name: "StatusMentis",
			date: new Date().toLocaleString("ru-RU", {
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
				hour: "2-digit",
				minute: "2-digit",
			}),
			id: user.id,
			firstName: user.first_name ? user.first_name : "",
			lastName: user.last_name ? user.last_name : "-",
			telegramNick: user.username,
			telegramLink: `https://t.me/${user.username}`,
			isPremium: user.is_premium,
			utmSource: params?.utm_source ?? "",
			utmMedium: params?.utm_medium ?? "",
			utmCampaign: params?.utm_campaign ?? "",
		}

		const sendDataToAPI = async () => {
			await axios.post(GOOGLESHEETS, newRow, {
				headers: {
					"Content-Type": "application/json",
				},
			})
		}

		if (!user.is_bot) {
			sendDataToAPI()
		}
	}
}
