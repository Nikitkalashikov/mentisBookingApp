import {
	DoctorInfoCategory,
	DoctorInfoExperience,
	DoctorInfoList,
} from "./styled"
import { IDoctorInfo } from "./type"

function DoctorInfo({ categories, experience, ...props }: IDoctorInfo) {
	return (
		<DoctorInfoList {...props}>
			{categories &&
				categories.map((category: { name: string }, index: number) => (
					<DoctorInfoCategory key={index}>
						{category.name}
						{categories && index < categories.length - 1 && ","}
					</DoctorInfoCategory>
				))}
			{experience && (
				<DoctorInfoExperience>стаж {experience}</DoctorInfoExperience>
			)}
		</DoctorInfoList>
	)
}

export { DoctorInfo }
