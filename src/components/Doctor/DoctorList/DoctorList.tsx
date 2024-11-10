import { DoctorListWrapper, DoctorListCard } from "./styled"
import { IDoctorCard } from "../DoctorCard"
import { DoctorListSkeleton } from "./DoctorListSkeleton"
import { useFilter } from "../../../hooks/useFilter"
import { useDoctors } from "../../../hooks/useDoctors"
import { useTelegram } from "@hooks/useTelegram"
import { useSelector } from "react-redux"
import { RootState } from "@store/index"

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
	const { tg } = useTelegram()
	const getClinic = useSelector((state: RootState) => state.clinic)

	if (tg && tg.MainButton && tg.MainButton.isVisible) {
		tg.MainButton.hide()
	}

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

		const matchesClinic =
			getClinic.slug === "all"
				? true
				: doctor.clinics?.some(
						(clinic: { slug: string }) => clinic.slug === getClinic.slug
				  )

		return matchesCategory && matchesClinic
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
