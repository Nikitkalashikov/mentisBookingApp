import styled from "styled-components"

export const ButtonWrapper = styled.button`
	display: flex;
	flex-direction: row;
	padding: 8px 16px;
	font-size: 16px;
	line-height: 28px;
	color: var(--white-color);
	cursor: pointer;
	transition: 0.5s ease;
	background-color: var(--primary-color);
	border: 0;
	border-radius: 16px;

	&.stroke {
		color: var(--color-secondary);
		transition: 0.5s ease;
		background: none;
		border: 1px solid var(--primary-color);
	}

	&:hover {
		transition: 0.5s ease;
		background-color: var(--primary-hover-color);
	}
`
