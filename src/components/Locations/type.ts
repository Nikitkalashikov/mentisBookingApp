export interface ILocation {
	slug: string
	title: string
}

export interface ILocations {
	title: string
	addresses: ILocation[]
}
