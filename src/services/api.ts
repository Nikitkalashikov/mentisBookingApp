import axios from "axios"

const DOCTORS_POINT = import.meta.env.MENTIS_DOCTORS_URL
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
		const response = await axios.get(DOCTORS_POINT, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return response.data
	} catch {
		throw new Error("Ошибка при получении списка докторов")
	}
}

export const getDoctorByID = async (token: string, id: string) => {
	try {
		const response = await axios.get(`${DOCTORS_POINT}/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return response.data
	} catch {
		throw new Error("Ошибка при получении доктора")
	}
}
