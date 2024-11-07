import LocationIcon from "@icons/Location"
import {
	Location,
	LocationsList,
	LocationsWrapp,
	LocationTitle,
} from "./styled"
import { ILocations } from "./type"

function Locations({ title, addresses, ...props }: ILocations) {
	return (
		<LocationsWrapp {...props}>
			<LocationTitle>{title}</LocationTitle>
			<LocationsList>
				{addresses.map(address => (
					<Location key={address.slug}>
						<LocationIcon />
						{address.title}
					</Location>
				))}
			</LocationsList>
		</LocationsWrapp>
	)
}

export { Locations }
