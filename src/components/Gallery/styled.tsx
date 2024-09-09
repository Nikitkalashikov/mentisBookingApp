import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"

export const GallerySlider = styled(Swiper)`
	padding-bottom: 16px;
`

export const GallerySlide = styled(SwiperSlide)`
	padding: 16px;
	background-color: var(--primary-color);
	border-radius: 24px;
	width: fit-content;
	height: 160px;
	overflow: hidden;
	box-sizing: border-box;

	img {
		width: 100%;
		height: 100%;
		cursor: pointer;
		border-radius: 12px;
		object-fit: cover;
	}
`
