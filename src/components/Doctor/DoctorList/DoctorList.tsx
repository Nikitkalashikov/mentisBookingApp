import { DoctorListWrapper, DoctorListCard } from "./styled"
import { IDoctorCard } from "../DoctorCard"
import { useDoctors } from "../../../hooks/useDoctors"
// import { FiltersDoctor } from "../../Filters"
// import { Footer } from "../../Footer"
import { DoctorListSkeleton } from "./DoctorListSkeleton"
// import { useState } from "react"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

function DoctorList() {
	const {
		data: doctors,
		isLoading,
		isError,
		error,
	} = useDoctors(USERNAME, PASSWORD)

	// const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

	// const handleCategoryChange = (category: string | null) => {
	// 	setSelectedCategory(category)
	// }

	// const filteredDoctors = doctors?.filter((doctor: IDoctorCard) => {
	// 	const matchesCategory = selectedCategory
	// 		? doctor.doctor_categories?.some(
	// 				category => category.slug === selectedCategory
	// 		  )
	// 		: true
	// 	return matchesCategory
	// })

	if (isError) {
		return <div>{error.message}</div>
	}

	if (isLoading || !doctors) {
		return <DoctorListSkeleton />
	}

	return (
		<>
			<DoctorListWrapper>
				{doctors.map((doctor: IDoctorCard) => (
					<DoctorListCard key={doctor.id} {...doctor} />
				))}
			</DoctorListWrapper>
			{/* <Footer>
				<FiltersDoctor
					selectedCategory={selectedCategory}
					onCategoryChange={handleCategoryChange}
				/>
			</Footer> */}
		</>
	)
}

export { DoctorList }
