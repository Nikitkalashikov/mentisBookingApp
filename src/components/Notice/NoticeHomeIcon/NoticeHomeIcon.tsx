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
	const { user } = useTelegram()

	return (
		<NoticeHomeIconWrapp {...props}>
			<NoticeHomeIconBody>
				<NoticeHomeIconLabel>
					{user && user.first_name ? `${user.first_name}, д` : "Д"}
					обавьте иконку приложения на&nbsp;главный&nbsp;экран
				</NoticeHomeIconLabel>
				<NoticeHomeIconButton className="white small">
					Добавить
				</NoticeHomeIconButton>
			</NoticeHomeIconBody>
			<NoticeHomeIconBg>
				<Wave2Icon />
			</NoticeHomeIconBg>
		</NoticeHomeIconWrapp>
	)
}
