import { Link } from "react-router-dom"
import styled from "styled-components"
import { Tag } from "../../components/Tag"
import { Body } from "../../components/Body"
import { Gallery } from "../../components/Gallery"
import Wave1 from "../../assets/images/wave-1.svg"
import { ButtonBooking } from "../../components/Button/ButtonBooking"

export const DoctorPageBody = styled(Body)`
	padding-bottom: 80px;
`

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

export const DoctorPageWave = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`

export const DoctorPageButtonBooking = styled(ButtonBooking)`
	position: absolute;
	bottom: 16px;
	left: 16px;
	right: 16px;
	justify-content: center;
`

export const DoctorPageCategories = styled.p`
	margin-top: 8px;
	font-size: 16px;
	line-height: 24px;
	color: var(--focus-color);
`

export const DoctorPageBlockInner = styled.div`
	position: relative;
	z-index: 1;
`
export const DoctorPageBlock = styled.div`
	position: relative;
	padding: 16px;
	border-radius: 24px;
	background-color: var(--white-color);
	box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
	overflow: hidden;

	&.wave1 {
		&:after {
			position: absolute;
			right: 0;
			top: 0;
			content: "";
			width: 130%;
			height: 180%;
			background-image: url(${Wave1});
		}
	}

	&.focus {
		background-color: var(--primary-color);

		& > ${DoctorPageTitle}, & > ${DoctorPageCategories} {
			color: var(--white-color);
		}
	}

	& + & {
		margin-top: 24px;
	}
`

export const DoctorPageGallery = styled(Gallery)`
	margin-top: 24px;
`

export const DoctorPageBlockTitle = styled.p`
	font-size: 20px;
	line-height: 28px;
	font-weight: 500;
	margin-bottom: 24px;
`

export const DoctorPageBlockContent = styled.div`
	font-size: 16px;
	line-height: 24px;

	p {
		margin-bottom: 12px;

		&:last-child {
			margin-bottom: 0;
		}
	}
`

export const DoctorPageDirections = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: -4px;
`

export const DoctorPageDirectionsItem = styled(Tag)`
	display: block;
	margin: 4px;
`

export const DoctorPageBackLink = styled(Link)`
	position: fixed;
	bottom: 0;
	left: -16px;
	right: -16px;
	display: flex;
	align-items: center;
	width: 100vw;
	max-width: 456px;
	margin: 0 auto;
	padding: 12px;
	justify-content: center;
	text-align: center;
	color: var(--secondary-color);
	font-size: 16px;
	line-height: 24px;
	transition: 0.5s ease;
	background-color: var(--thirdy-color);
	border-radius: 8px;
	z-index: 10;

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
