import { useQuery } from "@tanstack/react-query"
import { useToken } from "./useToken"
import { getDoctorByID } from "@services/api"

export const useDoctorByID = (
	username: string,
	password: string,
	id: string
) => {
	const {
		data: token,
		isLoading: tokenLoading,
		isError: tokenError,
	} = useToken(username, password)

	return useQuery({
		queryKey: ["doctor", id],
		queryFn: () => {
			if (!token || tokenError) throw new Error("Token is not available")
			return getDoctorByID(token, id)
		},
		staleTime: 1000 * 60 * 30,
		enabled: !!token && !tokenLoading,
		retry: 2,
	})
}
