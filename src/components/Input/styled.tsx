import { InputMask } from "@react-input/mask"
import styled from "styled-components"

export const InputField = styled.input`
	padding: 12px 16px;
	font-size: 18px;
	line-height: 26px;
	border-radius: 8px;
	border: 1px solid var(--gray-dark-color);

	&:focus {
		outline: none;
	}
`

export const InputPhoneField = styled(InputMask)`
	padding: 12px 16px;
	font-size: 18px;
	line-height: 26px;
	border-radius: 8px;
	border: 1px solid var(--gray-dark-color);

	&:focus {
		outline: none;
	}
`
