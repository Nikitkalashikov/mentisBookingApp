import LocationIcon from "@icons/Location"
import { CitiesWrapper } from "./styled"

function Clinics() {
	const clinics = [
		{
			slug: "first",
			value: "Первая",
		},
		{
			slug: "second",
			value: "Вторая",
		},
	]

	return (
		<CitiesWrapper
			icon={<LocationIcon />}
			placeholder="Все клиники"
			options={clinics}
		/>
	)
}
export { Clinics }
