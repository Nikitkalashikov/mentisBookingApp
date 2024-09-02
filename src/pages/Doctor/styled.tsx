import { Link } from "react-router-dom"
import styled from "styled-components"
import { Button } from "../../components/Button"

export const DoctorPageTitle = styled.p`
	font-size: 26px;
	line-heigth: 34px;
`

export const DoctorPageThumbnail = styled.div`
	position: relative;
	margin-bottom: 24px;
	width: 100%;
	height: 460px;
	border-radius: 24px;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const DoctorPageButton = styled(Button)`
	position: absolute;
	bottom: 16px;
	left: 16px;
	right: 16px;
	justify-content: center;
`

export const DoctorPageBlock = styled.div`
	padding: 16px;
	border-radius: 24px;
	background-color: var(--white-color);
	box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
`

export const DoctorPageCategories = styled.p`
	margin-top: 8px;
	font-size: 16px;
	line-height: 24px;
	color: var(--focus-color);
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
