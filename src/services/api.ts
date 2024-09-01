import axios from "axios"

const DOCTOR_POINT = import.meta.env.MENTIS_DOCTORS_URL
const TOKEN_URL = import.meta.env.MENTIS_TOKEN_URL

export const getToken = async (
	username: string,
	password: string
): Promise<string> => {
	try {
		const response = await axios.post(TOKEN_URL, {
			username,
			password,
		})
		return response.data.token
	} catch (error: any) {
		throw new Error(`Ошибка при получении токена: ${error.message}`)
	}
}

export const getDoctors = async (token: string) => {
	try {
		const response = await axios.get(DOCTOR_POINT, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return response.data
	} catch {
		throw new Error("Ошибка при получении списка докторов")
	}
}
