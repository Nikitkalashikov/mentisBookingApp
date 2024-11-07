import styled from "styled-components"
import { Button } from "../Button"

export const FormHtml = styled.form`
	display: flex;
	flex-direction: column;
`

export const FormHead = styled.div`
	margin-bottom: 24px;
`
export const FormTitle = styled.p`
	font-size: 24px;
	line-height: 32px;
	font-weight: 600;
	text-align: center;
`

export const FormDesc = styled.p`
	text-align: center;
	color: var(--gray-dark-color);
	font-size: 16px;
	line-height: 24px;
`

export const FormButton = styled(Button)`
	padding: 16px;
	margin-top: 24px;
	justify-content: center;
	font-size: 18px;
	line-height: 26px;
`

export const FormContainer = styled.div`
	padding: 24px;
	border-radius: 24px;
	background-color: var(--white-color);
`
