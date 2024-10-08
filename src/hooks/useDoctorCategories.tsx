import { useQuery } from "@tanstack/react-query"
import { useToken } from "./useToken"
import { getDoctorsCategories } from "../services/api"

export const useDoctorsCategories = (username: string, password: string) => {
	const {
		data: token,
		isLoading: tokenLoading,
		isError: tokenError,
	} = useToken(username, password)

	return useQuery({
		queryKey: ["doctorsCategories"],
		queryFn: () => {
			if (!token || tokenError) throw new Error("Token is not available")
			return getDoctorsCategories(token)
		},
		staleTime: 1000 * 60 * 30,
		enabled: !!token && !tokenLoading,
		retry: 2,
	})
}
