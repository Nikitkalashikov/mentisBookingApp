import styled from "styled-components"
import { Swiper } from "swiper/react"
import { SwiperSlide } from "swiper/react"
import { FormTextarea } from "@components/Form/FormTextarea"
import { Button } from "@share/Button"

export const FormDiagnosticTitle = styled.p`
	font-size: 22px;
	line-height: 28px;
	font-weight: 600;
`

export const FormDiagnosticTextarea = styled(FormTextarea)`
	height: 180px;
`

export const FormDiagnosticSliderSteps = styled.div`
	font-size: 16px;
	line-height: 24px;
	margin-left: -24px;
	padding-left: 24px;
	padding-right: 8px;
	padding-top: 6px;
	padding-top: 6px;
	border-radius: 0 4px 4px 0;
	color: var(--white-color);
	background-color: var(--thirdy-color);
`

export const FormDiagnosticSliderHead = styled.div`
	margin-bottom: 24px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const FormDiagnosticSlider = styled(Swiper)`
	width: 100%;
	overflow: visible;
`

export const FormDiagnosticSlideContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
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
	z-index: -1;

	svg {
		width: 134%;
		height: auto;
	}
`

export const FormDiagnosticSliderBottom = styled.div`
	margin-top: 12px;
	display: flex;
	flex-direction: row;
	gap: 32px;
	align-items: center;
`

export const FormDiagnosticSliderNav = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	flex-direction: row;
	gap: 12px;
`

export const FormDiagnosticButton = styled(Button)`
	position: relative;
	width: 50%;
	height: auto;
	top: 0;
	margin-top: auto;
	left: auto;
	right: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;

	&:after {
		display: none;
	}
`
