import LocationIcon from "@icons/Location"
import { CitiesWrapper } from "./styled"
import { useClinics } from "@hooks/useClinics"
import { useDispatch, useSelector } from "react-redux"
import { setClinic } from "@store/slices/clinicSlice"
import { RootState } from "@store/index"
import Skeleton from "react-loading-skeleton"

function Clinics() {
	const { data: clinics, isLoading, isError, error } = useClinics()
	const getClinic = useSelector((state: RootState) => state.clinic)
	const dispatch = useDispatch()

	const handleChange = (e: React.MouseEvent<HTMLDivElement>) => {
		const slug = e.currentTarget.dataset.value
		const title = e.currentTarget.textContent

		if (title && slug) {
			dispatch(setClinic({ title, slug }))
		}
	}

	if (isError) {
		return <div>{error?.message}</div>
	}

	if (isLoading || !clinics) {
		return <Skeleton width="160px" height="32px" />
	}

	return (
		<CitiesWrapper
			onClick={handleChange}
			icon={<LocationIcon />}
			current={getClinic}
			options={clinics}
		/>
	)
}
export { Clinics }
