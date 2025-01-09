import styled from "styled-components"

export const BannerLink = styled.div`
	padding: 2px 8px 2px 10px;
	width: fit-content;
	margin-top: 12px;
	align-items: center;
	display: flex;
	flex-direction: row;
	color: var(--text-color);
	font-size: 16px;
	transition: 0.5s ease;
	line-height: 20px;
	border-radius: 4px 4px 4px 12px;
	background-color: var(--fourthy-color);

	svg {
		margin-left: 6px;
		width: 20px;
		height: auto;
	}
`

export const BannerWrapper = styled.div`
	cursor: pointer;
	position: relative;
	padding: 12px 130px 12px 12px;
	border-radius: 24px;
	color: var(--white-color);
	background: var(--primary-color);

	&:hover {
		${BannerLink} {
			color: var(--white-color);
			background-color: var(--primary-hover-color);
			transition: 0.5s ease;
		}
	}
`

export const BannerTitle = styled.p`
	font-size: 24px;
	font-weight: 600;
	line-height: 28px;
`

export const BannerDesc = styled.p`
	margin-bottom: 4px;
	font-size: 16px;
	line-height: 24px;
`

export const BannerImage = styled.img`
	position: absolute;
	height: auto;
	max-width: 130px;
	right: 16px;
	bottom: 0;
`

export const BannerBg = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	overflow: hidden;

	svg {
		width: 100%;
		height: auto;
	}
`
