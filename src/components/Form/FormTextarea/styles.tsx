import styled from "styled-components"

export const FormTextareaWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 16px;

	&:last-of-type {
		margin-bottom: 0;
	}
`

export const FormTextareaError = styled.span`
	font-size: 14px;
	line-height: 18px;
	color: var(--error-color);
`
