import { DoctorListWrapper, DoctorListCard } from "./styled"
import { IDoctorCard } from "../DoctorCard"
import { DoctorListSkeleton } from "./DoctorListSkeleton"
import { useFilter } from "../../../hooks/useFilter"
import { useDoctors } from "../../../hooks/useDoctors"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

function DoctorList() {
	const {
		data: doctors,
		isLoading,
		isError,
		error,
	} = useDoctors(USERNAME, PASSWORD)

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
		return matchesCategory
	})

	return (
		<DoctorListWrapper>
			{filteredDoctors.map((doctor: IDoctorCard) => (
				<DoctorListCard key={doctor.id} {...doctor} />
			))}
		</DoctorListWrapper>
	)
}

export { DoctorList }
