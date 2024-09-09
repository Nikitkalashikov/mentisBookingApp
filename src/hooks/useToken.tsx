import { useQuery } from "@tanstack/react-query"
import { getToken } from "../services/api"

export const useToken = (username: string, password: string) => {
	return useQuery({
		queryKey: ["token", username, password],
		queryFn: () => getToken(username, password),
		enabled: !!username && !!password,
		retry: 1,
	})
}
