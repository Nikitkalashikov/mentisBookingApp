import styled from "styled-components"

import { Tag } from "../../Tag"
import { Gallery } from "../../Gallery"
import Wave1 from "../../../assets/images/wave-1.svg"
import { ButtonBooking } from "../../Button/ButtonBooking"

export const DoctorProfileWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

export const DoctorProfileThumbnail = styled.div`
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

export const DoctorProfileName = styled.p`
	font-size: 26px;
	line-height: 34px;
	font-weight: 600;
`

export const DoctorProfileTitle = styled.p`
	font-size: 26px;
	line-height: 34px;
	font-weight: 500;
`

export const DoctorProfileWave = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`

export const DoctorProfilePrices = styled.div`
	margin: 24px 0 32px;
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const DoctorProfilePrice = styled.p`
	padding: 0 16px;
	display: flex;
	flex-direction: column;
	font-size: 28px;
	line-height: 36px;
	font-weight: 600;
	color: var(--text-color);

	span {
		font-size: 14px;
		line-height: 20px;
		font-weight: 500;
		color: var(--gray-dark-color);
	}
`

export const DoctorProfileButtonBooking = styled(ButtonBooking)`
	position: fixed;
	bottom: 16px;
	left: 16px;
	right: 16px;
	max-width: 375px;
	margin: auto;
	padding-top: 12px;
	padding-bottom: 12px;
	font-size: 18px;
	line-height: 26px;
	justify-content: center;
	z-index: 10;
	background-color: var(--primary-hover-color);
`

export const DoctorProfileCategory = styled.span`
	padding-right: 4px;
	font-size: 16px;
	line-height: 24px;
	color: var(--secondary-color);

	&:last-of-type {
		padding-right: 0;
	}
`

export const DoctorProfileBlockInner = styled.div`
	position: relative;
	z-index: 1;
`

export const DoctorProfileExperience = styled.span`
	position: relative;
	font-size: 16px;
	line-height: 24px;
	padding-left: 18px;

	&:before {
		content: "";
		position: absolute;
		display: block;
		width: 5px;
		height: 5px;
		left: 6px;
		top: 10px;
		border-radius: 50%;
		background-color: var(--white-color);
	}
`

export const DoctorProfileBlock = styled.div`
	position: relative;
	padding: 16px;
	border-radius: 24px;
	background-color: var(--white-color);
	box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
	overflow: hidden;

	${DoctorProfileTitle} {
		margin-bottom: 24px;
	}

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

	&.info {
		margin-top: -100px;
	}

	&.focus {
		background-color: var(--primary-color);

		${DoctorProfileName}, ${DoctorProfileCategory}, ${DoctorProfileExperience} {
			color: var(--white-color);
		}
	}

	& + & {
		margin-top: 24px;
	}
`

export const DoctorProfileList = styled.div`
	margin-top: 12px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
`

export const DoctorProfileGalleryWrapper = styled.div`
	margin-top: 24px;
`

export const DoctorProfileGallery = styled(Gallery)`
	width: 100%;
	margin-top: 24px;
`

export const DoctorProfileBlockTitle = styled.p`
	font-size: 20px;
	line-height: 28px;
	font-weight: 500;
	margin-bottom: 24px;
`

export const DoctorProfileBlockContent = styled.div`
	font-size: 16px;
	line-height: 24px;

	p {
		margin-bottom: 12px;

		&:last-child {
			margin-bottom: 0;
		}
	}
`

export const DoctorProfileDirections = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: -4px;
`

export const DoctorProfileDirectionsItem = styled(Tag)`
	display: block;
	margin: 4px;
`
