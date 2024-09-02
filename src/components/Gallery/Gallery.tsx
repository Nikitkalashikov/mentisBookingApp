import { GallerySlider, GallerySlide } from "./styled"
import { IGallery } from "./type"
import { Fancybox } from "@fancyapps/ui"
import "swiper/swiper-bundle.css"
import "@fancyapps/ui/dist/fancybox/fancybox.css"
import { useEffect } from "react"

function Gallery({ gallery, galleryId, ...props }: IGallery) {
	useEffect(() => {
		Fancybox.bind("[data-fancybox]", {})
	}, [])

	return (
		<GallerySlider {...props} spaceBetween={16} slidesPerView={2}>
			{gallery.map((image, index) => (
				<GallerySlide key={index}>
					<img src={image.url} alt={image.alt} data-fancybox={galleryId} />
				</GallerySlide>
			))}
		</GallerySlider>
	)
}

export { Gallery }
