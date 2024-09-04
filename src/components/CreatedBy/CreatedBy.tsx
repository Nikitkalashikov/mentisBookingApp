import { CreatedByLink, CreatedByWrapper } from "./styled"

function CreatedBy({ ...props }) {
	return (
		<CreatedByWrapper {...props}>
			Разработано&nbsp;в&nbsp;
			<CreatedByLink href="https://kalashnikof.com" target="_blank">
				kalashnikof
			</CreatedByLink>
		</CreatedByWrapper>
	)
}

export { CreatedBy }
