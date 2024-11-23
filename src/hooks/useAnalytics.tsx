import axios from "axios"
import { useTelegram } from "./useTelegram"
import { setLocalStorageItemWithExpiry } from "@utils/helpers/setLocalStorage"
import { getLocalStorageItemWithExpiry } from "@utils/helpers/getLocalStorage"
import { useEffect } from "react"

export const useAnalytics = () => {
	const { tg, user } = useTelegram()

	useEffect(() => {
		if (!tg || !user) return
	}, [])

	try {
		const localVisited = getLocalStorageItemWithExpiry("visited")

		if (localVisited !== "true") {
			setLocalStorageItemWithExpiry({
				key: "visited",
				value: "true",
				expiryTimeInMs: 300000,
			})

			const GOOGLESHEETS = import.meta.env.MENTIS_GOOGLESHEETS

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
	} catch (error) {
		console.error("Error accessing localStorage:", error)
	}
}
