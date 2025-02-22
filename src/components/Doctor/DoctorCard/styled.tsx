import styled from "styled-components"
import { Link } from "react-router-dom"
import { ButtonBooking } from "@components/Button"
import { DoctorInfo } from "../DoctorInfo"
import { Locations } from "@components/Locations"

export const DoctorCardWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: var(--white-color);
	line-height: 0;
	border-radius: 24px;
	overflow: hidden;
	box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
	transition: background-color 0.3s ease;

	&.active {
		background-color: var(--primary-color);
		transition: background-color 0.3s ease;
	}
`

export const DoctorCardTypeWord = styled.div`
	position: absolute;
	left: 8px;
	bottom: 8px;
	display: flex;
	flex-direction: column;
	gap: 4px;
`

export const DoctorCardLink = styled.div`
	position: absolute;
	padding: 2px 10px;
	bottom: 8px;
	right: 8px;
	display: flex;
	font-weight: 400;
	align-items: center;
	color: var(--white-color);
	background-color: var(--primary-color);
	border-radius: 4px 4px 16px 4px;
	overflow: hidden;
	transition: 0.5s ease;

	svg {
		margin-left: 4px;
		width: 18px;
		height: 18px;
	}
`

export const DoctorCardInfo = styled(DoctorInfo)`
	margin-bottom: 16px;
	color: var(--text-color);

	span {
		color: var(--text-color);

		&:before {
			background-color: var(--text-color);
		}
	}
`

export const DoctorCardThumbnail = styled(Link)`
	position: relative;
	width: 100%;
	height: 480px;
	cursor: pointer;
	overflow: hidden;
	border-radius: 24px;

	&:hover {
		${DoctorCardLink} {
			transition: 0.5s ease;
			color: var(--primary-color);
			background-color: var(--white-color);
		}
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const DoctorCardTitle = styled.p`
	font-size: 22px;
	line-height: 28px;
	font-weight: 500;
`

export const DoctorCardPayment = styled.div`
	margin-top: 16px;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
`

export const DoctorCardLocations = styled(Locations)`
	margin-bottom: 16px;
`

export const DoctorCardPaymentItem = styled.div`
	margin-right: 8px;
	width: calc(100% / 2 - 8px);
	padding: 4px;
	display: flex;
	flex-direction: column;
	align-items: end;
	background-color: var(--gray-color);
	border-radius: 4px;

	&:last-child {
		margin-right: 0;
	}

	span {
		font-size: 14px;
		line-height: 22px;
	}

	p {
		font-size: 16px;
		line-height: 24px;
		font-weight: 500;
	}
`

export const DoctorCardBody = styled.div`
	padding: 16px;
`

export const DoctorCardButton = styled(ButtonBooking)`
	margin-top: 14px;
	width: 100%;
	justify-content: center;
`
