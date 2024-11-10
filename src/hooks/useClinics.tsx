import { useQuery } from "@tanstack/react-query"
import { useToken } from "./useToken"
import { getClinics } from "@services/api"

export const useClinics = () => {
	const USERNAME = import.meta.env.MENTIS_USERNAME
	const PASSWORD = import.meta.env.MENTIS_PASSWORD

	const {
		data: token,
		isLoading: tokenLoading,
		isError: tokenError,
	} = useToken(USERNAME, PASSWORD)

	return useQuery({
		queryKey: ["clinics"],
		queryFn: async () => {
			if (!token || tokenError) throw new Error("Token is not available")

			const clinics = await getClinics(token)

			return [
				{ title: "Все клиники", value: "all" },
				...clinics.map(
					(clinic: { title: { rendered: string }; slug: string }) => ({
						title: clinic.title.rendered,
						value: clinic.slug,
					})
				),
			]
		},
		staleTime: 1000 * 60 * 30,
		enabled: !!token && !tokenLoading,
		retry: 2,
	})
}
