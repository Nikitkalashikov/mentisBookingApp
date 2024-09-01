import {
	DoctorBody,
	DoctorButton,
	DoctorCardWrapper,
	DoctorThumbnail,
	DoctorTitle,
} from "./styled"
import { IDoctorCard } from "./type"

function DoctorCard({ fio, thumbnail_url, ...props }: IDoctorCard) {
	return (
		<DoctorCardWrapper {...props}>
			<DoctorThumbnail>
				<img src={thumbnail_url} alt={fio} />
			</DoctorThumbnail>
			<DoctorBody>
				<DoctorTitle>{fio}</DoctorTitle>
				<DoctorButton>Записаться</DoctorButton>
			</DoctorBody>
		</DoctorCardWrapper>
	)
}

export { DoctorCard }
