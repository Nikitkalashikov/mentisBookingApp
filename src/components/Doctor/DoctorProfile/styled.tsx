import styled from "styled-components"

import { Tag } from "../../Tag"
import { Gallery } from "../../Gallery"
import Wave1 from "../../../assets/images/wave-1.svg"
import { ButtonBooking } from "../../Button/ButtonBooking"
import { DoctorInfo } from "../DoctorInfo"

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

export const DoctorProfileInfo = styled(DoctorInfo)`
	color: var(--white-color);
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

export const DoctorProfileButtonBooking = styled(ButtonBooking)`
	width: 100%;
	padding-top: 12px;
	padding-bottom: 12px;
	font-size: 18px;
	line-height: 26px;
	justify-content: center;
	background-color: var(--primary-hover-color);
`

export const DoctorProfileBlockInner = styled.div`
	position: relative;
	z-index: 1;
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

		${DoctorProfileName} {
			color: var(--white-color);
		}
	}

	& + & {
		margin-top: 24px;
	}
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
