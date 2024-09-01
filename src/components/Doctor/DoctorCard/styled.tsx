import styled from "styled-components"
import { Button } from "../../Button"

export const DoctorCardWrapper = styled.div`
	width: 100%;
	max-width: 375px;
	display: flex;
	flex-direction: column;
	background-color: var(--white-color);
	border-radius: 24px;
	overflow: hidden;
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
`

export const DoctorCardLink = styled.div`
	position: absolute;
	padding: 2px 10px;
	bottom: 8px;
	right: 8px;
	color: var(--secondary-color);
	background-color: var(--white-color);
	border-radius: 4px 4px 16px 4px;
	overflow: hidden;
`

export const DoctorCardThumbnail = styled.a`
	position: relative;
	width: 100%;
	height: 280px;
	cursor: pointer;
	overflow: hidden;
	border-radius: 24px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const DoctorCardTitle = styled.p`
	font-size: 20px;
	line-height: 28px;
	font-weight: 500;
`

export const DoctorCardPayment = styled.div`
	margin-top: 16px;
	display: flex;
	flex-direction: row;
`

export const DoctorCardPaymentItem = styled.div`
	display: flex;
	flex-direction: column;
`

export const DoctorCardCategories = styled.p`
	margin-top: 8px;
	font-size: 16px;
	line-height: 24px;
	color: var(--focus-color);
`

export const DoctorCardBody = styled.div`
	padding: 16px;
	background-color: var(--white-color);
`

export const DoctorCardButton = styled(Button)`
	margin-top: 14px;
	width: 100%;
	justify-content: center;
`
