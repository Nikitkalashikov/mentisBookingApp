import styled from "styled-components"
import { Button } from "../../Button"

export const DoctorCardWrapper = styled.div`
	width: 100%;
	max-width: 375px;
	display: flex;
	flex-direction: column;
	background-color: var(--white-color);
`

export const DoctorThumbnail = styled.div`
	width: 100%;
	height: 260px;
	overflow: hidden;
	border-radius: 24px 24px 0 0;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const DoctorTitle = styled.p`
	font-size: 20px;
	line-height: 28px;
	font-weight: 500;
`

export const DoctorBody = styled.div`
	padding: 16px;
	background-color: var(--white-color);
	border-radius: 24px;
`

export const DoctorButton = styled(Button)`
	margin-top: 14px;
	width: 100%;
	text-align: center;
`
