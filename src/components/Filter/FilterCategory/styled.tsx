import styled from "styled-components"
import { Button } from "../../Button"

export const FilterCategoryList = styled.div`
	display: flex;
	flex-direction: column;
`

export const FilterCategoryButton = styled(Button)`
	margin-bottom: 6px;
	border-radius: 4px;
	color: var(--text-color);
	background-color: var(--secondary-color);

	&.active,
	&:hover {
		color: var(--white-color);
	}

	&:last-of-type {
		margin-bottom: 0;
	}
`

export const FilterCategoryTitle = styled.p`
	margin-bottom: 16px;
	font-size: 24px;
	font-weight: 500;
	line-height: 32px;
`
