import styled from "styled-components"

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

export const InputField = styled.input`
	padding: 16px;
	font-size: 18px;
	line-height: 26px;
	border-radius: 8px;
	border: 1px solid var(--gray-dark-color);

	&:focus {
		outline: none;
	}
`

export const InputError = styled.span`
	font-size: 14px;
	line-height: 18px;
	color: var(--error-color);
`
