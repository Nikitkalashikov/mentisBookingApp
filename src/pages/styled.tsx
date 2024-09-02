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
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 12px;
	text-align: center;
	color: var(--white-color);
	font-size: 16px;
	line-height: 24px;
	transition: 0.5s ease;
	background-color: var(--primary-color);

	&:hover {
		color: var(--white-color);
		transition: 0.5s ease;
		background-color: var(--primary-hover-color);
	}
`
