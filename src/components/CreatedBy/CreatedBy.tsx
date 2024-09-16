import LogoKalashnikofIcon from "../../assets/icons/LogoKalashnikof"
import { CreatedByLink, CreatedByWrapper } from "./styled"

function CreatedBy({ ...props }) {
	return (
		<CreatedByWrapper {...props}>
			<CreatedByLink href="https://kalashnikof.com" target="_blank">
				<LogoKalashnikofIcon />
			</CreatedByLink>
		</CreatedByWrapper>
	)
}

export { CreatedBy }
