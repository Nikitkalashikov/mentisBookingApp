import styled from "styled-components"

export const FormInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 8px;

	&:last-of-type {
		margin-bottom: 0;
	}
`

export const FormInputError = styled.span`
	font-size: 14px;
	line-height: 18px;
	color: var(--error-color);
`
