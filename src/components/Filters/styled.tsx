import styled from "styled-components"
import { Button } from "../Button"

export const FiltersWrapper = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: auto;
	margin: auto;
	max-width: 375px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 6px;
	border-radius: 24px 24px 0 0;
	background-color: var(--white-color);
	transition: 0.5s ease;
	border-top: 1px solid var(--white-color);
	z-index: 1000;

	&.active {
		border-radius: 0;
		border-color: var(--secondary-color);
		transition: 0.3s ease;
	}
`

export const FiltersModalContent = styled.div`
	max-width: 375px;
	width: 90%;
	padding: 24px 24px 90px 24px;
	bottom: -100%;
	min-height: 260px;
	heigth: fit-content;
	max-height: 80%;
	margin: 0 auto;
	border-radius: 24px 24px 0 0;
	background-color: var(--white-color);
	transform: translateY(100%);
	transition: transform 0.3s ease;
`

export const FiltersModal = styled.div`
	position: fixed;
	display: flex;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	justify-content: center;
	align-items: flex-end;
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.3s ease, visibility 0.3s ease;
	background: rgba(0, 0, 0, 0.3);

	&.active {
		opacity: 1;
		visibility: visible;

		${FiltersModalContent} {
			transform: translateY(0);
		}
	}
`

export const FiltersButton = styled(Button)`
	color: var(--text-color);
	background: transparent;
	border: 0;
	border-radius: 0;

	&:hover {
		color: var(--text-color);
		background: transparent;
	}
`
