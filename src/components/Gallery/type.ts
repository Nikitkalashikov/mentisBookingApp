interface IGallery {
	galleryId: string
	gallery: {
		url: string
		alt: string
	}[]
}

export type { IGallery }
