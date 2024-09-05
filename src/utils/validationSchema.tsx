import * as Yup from "yup"

export const validationSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, "Имя должно содержать не менее 3 символов")
		.required("Имя обязательно"),
	tel: Yup.string().required("Телефон обязателен"),
})
