import { Wave2Icon } from "@icons/Wave2"
import {
	BannerBg,
	BannerDesc,
	BannerImage,
	BannerLink,
	BannerTitle,
	BannerWrapper,
} from "./styled"
import { IBanner } from "./type"
import ArrowIcon from "@icons/Arrow"

function Banner({ title, desc, image, ...props }: IBanner) {
	return (
		<BannerWrapper {...props}>
			{desc && <BannerDesc>{desc}</BannerDesc>}
			<BannerTitle>{title}</BannerTitle>
			{image && <BannerImage src={image} alt="Изображение баннера" />}
			<BannerLink>
				Пройти
				<ArrowIcon />
			</BannerLink>
			<BannerBg>
				<Wave2Icon />
			</BannerBg>
		</BannerWrapper>
	)
}

export { Banner }
