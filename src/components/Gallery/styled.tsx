import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"

export const GallerySlider = styled(Swiper)``

export const GallerySlide = styled(SwiperSlide)`
	padding: 16px;
	background-color: var(--primary-color);
	border-radius: 24px;
	height: 160px;
	overflow: hidden;

	img {
		width: auto;
		height: 100%;
		cursor: pointer;
		border-radius: 12px;
		object-fit: contain;
	}
`
