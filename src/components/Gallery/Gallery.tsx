import { GallerySlider, GallerySlide } from "./styled"
import { IGallery } from "./type"
import { Fancybox } from "@fancyapps/ui"
import { useEffect } from "react"
import { Scrollbar } from "swiper/modules"

import "@fancyapps/ui/dist/fancybox/fancybox.css"
import "swiper/swiper-bundle.css"

function Gallery({ gallery, galleryId, ...props }: IGallery) {
	useEffect(() => {
		Fancybox.bind("[data-fancybox]", {
			Toolbar: {
				enabled: false,
			},
		})
	}, [])

	const filteredGallery = gallery.filter(gallery => gallery.url)

	return (
		<GallerySlider
			{...props}
			modules={[Scrollbar]}
			spaceBetween={16}
			scrollbar={{ draggable: true }}
			slidesPerView={1.5}
		>
			{filteredGallery.map((image, index) => (
				<GallerySlide key={index}>
					<img src={image.url} alt={image.alt} data-fancybox={galleryId} />
				</GallerySlide>
			))}
		</GallerySlider>
	)
}

export { Gallery }
