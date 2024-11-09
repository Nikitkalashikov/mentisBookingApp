import styled from "styled-components"
import { Swiper } from "swiper/react"
import { SwiperSlide } from "swiper/react"
import { FormTextarea } from "../FormTextarea"
import { Button } from "@components/Button"

export const FormDiagnosticClosed = styled.div`
	position: absolute;
	top: 24px;
	right: 24px;
	cursor: pointer;
	width: 24px;
	height: 24px;
	margin-left: auto;
	margin-right: 0;
	z-index: 1;

	svg {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`

export const FormDiagnosticTitle = styled.p`
	font-size: 22px;
	line-height: 28px;
	font-weight: 600;
`

export const FormDiagnosticTextarea = styled(FormTextarea)`
	height: 260px;
`

export const FormDiagnosticSlider = styled(Swiper)`
	width: 100%;
`

export const FormDiagnosticSlideContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`

export const FormDiagnosticSlide = styled(SwiperSlide)`
	width: 100%;
	opacity: 0 !important;
	box-sizing: border-box;

	&.swiper-slide-active {
		opacity: 1 !important;
	}
`

export const FormDiagnosticSliderContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const FormDiagnosticBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 0;

	svg {
		width: 134%;
		height: auto;
	}
`

export const FormDiagnosticSliderBottom = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: row;
	gap: 32px;
	align-items: center;
`

export const FormDiagnosticSliderNav = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: 12px;
`

export const FormDiagnosticSliderButton = styled(Button)`
	position: relative;
	width: fit-content;
	height: auto;
	top: 0;
	margin-top: auto;
	left: auto;
	right: auto;
	display: flex;
	flex-direction: row;

	&:after {
		display: none;
	}
`
