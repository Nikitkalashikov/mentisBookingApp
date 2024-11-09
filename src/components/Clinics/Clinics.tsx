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

	return <CitiesWrapper placeholder="Все клиники" options={clinics} />
}
export { Clinics }
