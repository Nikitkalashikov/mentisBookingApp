import { ButtonAddHomeIcon } from "@components/Button/ButtonAddHomeIcon"
import { Notice } from "@share/Notice"
import styled from "styled-components"

export const NoticeHomeIconContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const NoticeHomeIconWrapp = styled(Notice)`
	position: relative;
	color: var(--white-color);
	background-color: var(--black-color);
`

export const NoticeHomeIconBody = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	z-index: 2;
`

export const NoticeHomeIconLabel = styled.div`
	font-size: var(--size-4);
	line-height: var(--size-5);
`

export const NoticeHomeIconButton = styled(ButtonAddHomeIcon)`
	height: auto;
`

export const NoticeHomeIconBg = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: 1;

	svg {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
`
