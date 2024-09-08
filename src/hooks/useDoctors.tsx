import { useQuery } from "@tanstack/react-query"
import { useToken } from "./useToken"
import { getDoctors } from "../services/api"

export const useDoctors = (username: string, password: string) => {
	const {
		data: token,
		isLoading: tokenLoading,
		isError: tokenError,
	} = useToken(username, password)

	return useQuery({
		queryKey: ["doctors", token],
		queryFn: () => {
			if (!token || tokenError) throw new Error("Token is not available")
			return getDoctors(token)
		},
		enabled: !!token && !tokenLoading,
		retry: false,
	})
}
