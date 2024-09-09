const tg = window.Telegram.WebApp

export const useTelegram = () => {
	const user = tg.initDataUnsafe?.user

	return { tg, user }
}
