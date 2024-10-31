import axios from "axios"

const DOCTORS_POINT = import.meta.env.MENTIS_DOCTORS_URL
const DOCTORS_CATEGORIES_POINT = import.meta.env.MENTIS_DOCTORS_CATEGORIES_URL
const TOKEN_URL = import.meta.env.MENTIS_TOKEN_URL
const SEND_EMAIL_URL = import.meta.env.MENTIS_SEND_EMAIL_URL

export const getToken = async (
	username: string,
	password: string
): Promise<string> => {
	const response = await axios.post(TOKEN_URL, {
		username,
		password,
	})
	return response.data.token
}

export const getDoctors = async (token: string) => {
	const response = await axios.get(DOCTORS_POINT, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		params: {
			per_page: 25,
		},
	})
	return response.data
}

export const getDoctorsCategories = async (token: string) => {
	const response = await axios.get(DOCTORS_CATEGORIES_POINT, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		params: {
			hide_empty: true,
			N: "name, slug",
			per_page: 25,
		},
	})
	return response.data
}

export const sendEmail = async (
	token: string,
	emailData: { subject: string; fio: string; tel: string; message: string }
) => {
	const formData = new FormData()
	formData.append("subject", emailData.subject)
	formData.append("fio", emailData.fio)
	formData.append("tel", emailData.tel)
	formData.append("message", emailData.message)
	formData.append("url", "https://t.me/StatusMentisBot/clinic")

	const response = await axios.post(SEND_EMAIL_URL, formData, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	return response.data
}

export const getDoctorByID = async (token: string, id: string) => {
	const response = await axios.get(`${DOCTORS_POINT}/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
	return response.data
}
