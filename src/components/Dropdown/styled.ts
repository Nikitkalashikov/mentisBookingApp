import styled from "styled-components"

export const DropdownValue = styled.div`
	cursor: pointer;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 4px 12px;
`
export const DropdownLocation = styled.div`
	margin-right: 4px;
	width: 18px;
	height: 18px;

	svg {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`

export const DropdownWrapper = styled.div`
	position: relative;
	height: auto;
	border: 1px solid var(--secondary-color);
	border-radius: 25px;
	transition: 0.5s ease;

	&:hover {
		border-color: var(--primary-color);
		transition: 0.5s ease;
	}
`

export const DropdownArrow = styled.div`
	margin-left: 6px;
	width: 20px;
	height: 20px;

	svg {
		transition: 0.5s ease;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	&.active {
		svg {
			transform: rotate(180deg);
			transition: 0.5s ease;
		}
	}
`

export const DropdownOptions = styled.div`
	position: absolute;
	width: 100%;
	top: calc(100% + 6px);
	opacity: 0;
	height: 0;
	padding: 0;
	visibility: hidden;
	background: var(--white-color);
	border-radius: 6px;
	z-index: 50;

	&.active {
		padding: 6px 8px;
		opacity: 1;
		visibility: visible;
		height: fit-content;
		transition: opacity 0.5s ease, height 1s ease;
	}
`

export const DropdownOption = styled.div`
	display: flex;
	flex-direction: column;
	transition: 0.5s ease;
	padding: 2px 4px;
	cursor: pointer;
	transition: 0.5s ease;
	font-size: 16px;
	line-height: 24px;
	border-radius: 2px;

	&.active,
	&:hover {
		transition: 0.5s ease;
		background-color: var(--secondary-color);
	}
`
