import { DoctorListWrapper, DoctorListCard, DoctorListLabel } from "./styled"
import { IDoctorCard } from "../DoctorCard"
import { DoctorListSkeleton } from "./DoctorListSkeleton"
import { useFilter } from "../../../hooks/useFilter"
import { useDoctorsWithCategories } from "../../../hooks/useDoctorWithCategories"

function DoctorList() {
	const { doctors, isLoading, isError, error } = useDoctorsWithCategories()

	const { category } = useFilter()

	if (isError) {
		return <div>{error?.message}</div>
	}

	if (isLoading || !doctors) {
		return <DoctorListSkeleton />
	}

	const filteredDoctors = doctors.filter((doctor: IDoctorCard) => {
		const matchesCategory = category
			? doctor.doctor_categories?.some(
					(cat: { name: string; slug: string }) => cat.name === category
			  )
			: true
		// const matchesPrice = price ? doctor.price <= price : true
		// return matchesCategory && matchesPrice
		return matchesCategory
	})

	return (
		<>
			{category && (
				<DoctorListLabel>
					Специализация: <span>{category}</span>
				</DoctorListLabel>
			)}
			<DoctorListWrapper>
				{filteredDoctors.map((doctor: IDoctorCard) => (
					<DoctorListCard key={doctor.id} {...doctor} />
				))}
			</DoctorListWrapper>
		</>
	)
}

export { DoctorList }
