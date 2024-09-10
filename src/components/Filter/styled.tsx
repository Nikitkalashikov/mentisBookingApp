import styled from "styled-components"
import { Button } from "../Button"

export const FilterWrapper = styled(Button)`
	color: var(--gray-dark-color);
	background: transparent;

	&:hover,
	&.active {
		color: var(--text-color);
		background: transparent;
	}
`

export const FilterModal = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.2);
`
