import styled from "styled-components"

import { Tag } from "../../components/Tag"
import { Gallery } from "../../components/Gallery"
import Wave1 from "../../assets/images/wave-1.svg"
import { ButtonBooking } from "../../components/Button/ButtonBooking"

export const UserWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

export const UserThumbnail = styled.div`
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

export const UserName = styled.p`
	font-size: 26px;
	line-height: 34px;
	font-weight: 600;
`

export const UserTitle = styled.p`
	font-size: 26px;
	line-height: 34px;
	font-weight: 500;
`

export const UserWave = styled.div`
	position: absolute;
	top: 0;
	right: 0;
`

export const UserPrices = styled.div`
	margin: 24px 0 32px;
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const UserPrice = styled.p`
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

export const UserButtonBooking = styled(ButtonBooking)`
	position: fixed;
	bottom: 16px;
	left: 16px;
	right: 16px;
	padding-top: 12px;
	padding-bottom: 12px;
	font-size: 18px;
	line-height: 26px;
	justify-content: center;
	z-index: 10;
	background-color: var(--primary-hover-color);
`

export const UserCategory = styled.span`
	padding-right: 4px;
	font-size: 16px;
	line-height: 24px;
	color: var(--secondary-color);

	&:last-of-type {
		padding-right: 0;
	}
`

export const UserBlockInner = styled.div`
	position: relative;
	z-index: 1;
`

export const UserExperience = styled.span`
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

export const UserBlock = styled.div`
	position: relative;
	padding: 16px;
	border-radius: 24px;
	background-color: var(--white-color);
	box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
	overflow: hidden;

	${UserTitle} {
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

		${UserName}, ${UserCategory}, ${UserExperience} {
			color: var(--white-color);
		}
	}

	& + & {
		margin-top: 24px;
	}
`

export const UserList = styled.div`
	margin-top: 12px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
`

export const UserGalleryWrapper = styled.div`
	margin-top: 24px;
`

export const UserGallery = styled(Gallery)`
	width: 100%;
	margin-top: 24px;
`

export const UserBlockTitle = styled.p`
	font-size: 20px;
	line-height: 28px;
	font-weight: 500;
	margin-bottom: 24px;
`

export const UserBlockContent = styled.div`
	font-size: 16px;
	line-height: 24px;

	p {
		margin-bottom: 12px;

		&:last-child {
			margin-bottom: 0;
		}
	}
`

export const UserDirections = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: -4px;
`

export const UserDirectionsItem = styled(Tag)`
	display: block;
	margin: 4px;
`
