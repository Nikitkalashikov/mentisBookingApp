import {
	DoctorListWrapper,
	DoctorListCard,
	DoctorListCardSkeleton,
} from "./styled"
import { IDoctorCard } from "../DoctorCard"
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

	if (isError) {
		return <div>{error.message}</div>
	}

	if (isLoading || !doctors) {
		return (
			<>
				<DoctorListCardSkeleton />
				<DoctorListCardSkeleton />
				<DoctorListCardSkeleton />
				<DoctorListCardSkeleton />
			</>
		)
	}

	return (
		<DoctorListWrapper>
			{doctors.map((doctor: IDoctorCard) => (
				<DoctorListCard key={doctor.id} {...doctor} />
			))}
		</DoctorListWrapper>
	)
}

export { DoctorList }
