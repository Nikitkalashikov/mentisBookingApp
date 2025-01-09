import LocationIcon from "@icons/Location"
import { DoctorDropdownWrapper } from "./styled"
import { useSelector } from "react-redux"
import { RootState } from "@store/index"
import { getDoctorClinics } from "@store/slices/doctorSlice"
import { IDoctorDropdownClinics } from "./type"
import { useState } from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function DoctorDropdownClinics({ onChange, ...props }: IDoctorDropdownClinics) {
	const currentClinic = useSelector((state: RootState) => state.clinic)
	const clinics = useSelector(getDoctorClinics)
	const [activeClinic, setActiveClinic] = useState<{
		title: string
		slug: string
	}>({
		title: "",
		slug: "",
	})

	if (!clinics.length) {
		return null
	}

	const handleClinicChange = (e: React.MouseEvent<HTMLDivElement>) => {
		const slug = e.currentTarget.dataset.value
		const title = e.currentTarget.textContent

		if (slug && title) {
			setActiveClinic({ title, slug })
			onChange(title)
		}
	}

	const current =
		clinics.find(
			clinic =>
				(currentClinic?.slug && clinic.slug === currentClinic.slug) ||
				(activeClinic?.slug && clinic.slug === activeClinic.slug)
		) || clinics[0]

	if (!current || clinics.length === 0) {
		return <Skeleton width="100%" height="32px" />
	}

	return (
		<DoctorDropdownWrapper
			onClick={handleClinicChange}
			icon={<LocationIcon />}
			current={current}
			options={clinics}
			{...props}
		/>
	)
}
export { DoctorDropdownClinics }
