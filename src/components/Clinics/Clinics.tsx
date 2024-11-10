import LocationIcon from "@icons/Location"
import { CitiesWrapper } from "./styled"
import { useClinics } from "@hooks/useClinics"
import { Skeleton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setClinic } from "@store/slices/clinicSlice"
import { RootState } from "@store/index"

function Clinics() {
	const { data: clinics, isLoading, isError, error } = useClinics()
	const getClinic = useSelector((state: RootState) => state.clinic)
	const dispatch = useDispatch()

	const handleChange = (e: React.MouseEvent<HTMLDivElement>) => {
		const value = e.currentTarget.dataset.value
		const title = e.currentTarget.textContent

		if (title && value) {
			dispatch(setClinic({ title, value }))
		}
	}

	if (isError) {
		return <div>{error?.message}</div>
	}

	if (isLoading || !clinics) {
		return <Skeleton variant="rounded" width="160px" height="32px" />
	}

	return (
		<CitiesWrapper
			onChange={handleChange}
			icon={<LocationIcon />}
			current={getClinic}
			options={clinics}
		/>
	)
}
export { Clinics }
