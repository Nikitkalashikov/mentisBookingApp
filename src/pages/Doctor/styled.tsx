import { Link } from "react-router-dom"
import styled from "styled-components"

export const DoctorPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

export const DoctorPageTitle = styled.p`
	font-size: 20px;
	line-heigth: 28px;
`

export const DoctorPageBackLink = styled(Link)`
	position: fixed;
	bottom: 16px;
	left: auto;
	right: auto;
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 480px;
	margin: 0 auto;
	padding: 12px;
	justify-content: center;
	text-align: center;
	color: var(--white-color);
	font-size: 16px;
	line-height: 24px;
	transition: 0.5s ease;
	background-color: var(--primary-color);
	border-radius: 8px;

	&:hover {
		color: var(--white-color);
		transition: 0.5s ease;
		background-color: var(--primary-hover-color);
	}

	svg {
		margin-right: 6px;
		width: 24px;
		height: 24px;
		transform: rotate(180deg);
	}
`
