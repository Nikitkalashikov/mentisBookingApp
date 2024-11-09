import styled from "styled-components"

export const TextareaField = styled.textarea`
	padding: 16px;
	font-family: var(--font-family);
	font-size: 18px;
	line-height: 26px;
	border-radius: 8px;
	border: 1px solid var(--gray-dark-color);
	resize: none;

	&:focus {
		outline: none;
	}
`
