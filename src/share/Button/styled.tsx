import styled from "styled-components"

export const ButtonWrapper = styled.button`
	display: flex;
	flex-direction: row;
	padding: var(--size-2) var(--size-4);
	font-size: var(--size-4);
	line-height: var(--size-6);
	color: var(--white-color);
	cursor: pointer;
	transition: 0.5s ease;
	background-color: var(--primary-color);
	border: 0;
	border-radius: var(--size-3);

	&.stroke {
		color: var(--color-secondary);
		transition: 0.5s ease;
		background: none;
		border: 1px solid var(--primary-color);
	}

	&.white {
		color: var(--black-color);
		transition: 0.5s ease;
		background: var(--white-color);

		&:hover {
			color: var(--white-color);
			transition: 0.5s ease;
		}
	}

	&.small {
		padding: var(--size-1) var(--size-2);
		border-radius: var(--size-2);
	}

	&:hover,
	&.active {
		transition: 0.5s ease;
		background-color: var(--primary-hover-color);
	}
`
