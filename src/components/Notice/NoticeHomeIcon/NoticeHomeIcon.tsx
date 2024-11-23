import { Wave2Icon } from "@icons/Wave2"
import {
	NoticeHomeIconBg,
	NoticeHomeIconBody,
	NoticeHomeIconButton,
	NoticeHomeIconLabel,
	NoticeHomeIconWrapp,
} from "./styled"
import { useTelegram } from "@hooks/useTelegram"

export const NoticeHomeIcon = ({ ...props }) => {
	const { tg, user } = useTelegram()

	const version = parseInt(tg.version)

	if (version < 8) return

	return (
		<NoticeHomeIconWrapp {...props}>
			<NoticeHomeIconBody>
				<NoticeHomeIconLabel>
					{user && user.first_name ? `${user.first_name}, д` : "Д"}
					обавьте иконку приложения на&nbsp;главный&nbsp;экран
				</NoticeHomeIconLabel>
				<NoticeHomeIconButton title="Добавить" className="white small" />
			</NoticeHomeIconBody>
			<NoticeHomeIconBg>
				<Wave2Icon />
			</NoticeHomeIconBg>
		</NoticeHomeIconWrapp>
	)
}
