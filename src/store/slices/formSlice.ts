import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FormState {
	isOpen: boolean
	title: string
	subject: string
	description: string
	buttonText: string
}

const initialState: FormState = {
	isOpen: false,
	title: "Записаться на приём",
	subject: "Новая запись из Телеграм приложения",
	description: "",
	buttonText: "Отправить",
}

const formSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		openForm(state) {
			state.isOpen = true
		},
		closeForm(state) {
			state.isOpen = false
		},
		setTitle(state, action: PayloadAction<string>) {
			state.title = action.payload
		},
		setSubject(state, action: PayloadAction<string>) {
			state.subject = action.payload
		},
		setDescription(state, action: PayloadAction<string>) {
			state.description = action.payload
		},
		setButtonText(state, action: PayloadAction<string>) {
			state.buttonText = action.payload
		},
	},
})

export const {
	openForm,
	closeForm,
	setTitle,
	setSubject,
	setDescription,
	setButtonText,
} = formSlice.actions
export default formSlice.reducer
