import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FormQuestion {
	question: string
	placeholder: string
}

interface FormState {
	isOpen: boolean
	title: string
	subject: string
	description: string
	buttonText: string
	questions: FormQuestion[]
}

const initialState: FormState = {
	isOpen: false,
	title: "Отправить заявку",
	subject: "Предварительная консультация | Телеграм мини-приложение",
	description:
		"Отправьте заявку, чтобы мы могли проконсультировать вас и предложить решение проблемы",
	buttonText: "Отправить",
	questions: [
		{
			question: "Краткое описание проблемы",
			placeholder: "Опишите кратко вашу проблему или то, что вас беспокоит",
		},
		{
			question: "Вопрос к специалисту",
			placeholder:
				"Задайте конкретный вопрос, на который вы хотели бы получить ответ",
		},
		{
			question: "Информация о предпочтениях по лечению",
			placeholder:
				"Предпочитаете ли вы очную или онлайн консультацию? Есть ли у вас предпочтения относительно пола или специализации терапевта?",
		},
		{
			question: "Организационные вопросы",
			placeholder:
				"Есть ли у вас вопросы относительно стоимости услуг, времени проведения сеансов или других организационных моментов?",
		},
	],
}

const formDiagnosticSlice = createSlice({
	name: "formDiagnostic",
	initialState,
	reducers: {
		openFormDiagnostic(state) {
			state.isOpen = true
		},
		closeFormDiagnostic(state) {
			state.isOpen = false
		},
		setTitleDiagnostic(state, action: PayloadAction<string>) {
			state.title = action.payload
		},
		setSubjectDiagnostic(state, action: PayloadAction<string>) {
			state.subject = action.payload
		},
		setDescriptionDiagnostic(state, action: PayloadAction<string>) {
			state.description = action.payload
		},
		setButtonTextDiagnostic(state, action: PayloadAction<string>) {
			state.buttonText = action.payload
		},
		addQuestionDiagnostic(state, action: PayloadAction<FormQuestion>) {
			state.questions.push(action.payload)
		},
	},
})

export const {
	openFormDiagnostic,
	closeFormDiagnostic,
	setTitleDiagnostic,
	setSubjectDiagnostic,
	setDescriptionDiagnostic,
	setButtonTextDiagnostic,
} = formDiagnosticSlice.actions
export default formDiagnosticSlice.reducer
