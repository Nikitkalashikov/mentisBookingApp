import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ClinicsState {
	value: string
	title: string
}

const initialState: ClinicsState = {
	title: "Все клиники",
	value: "all",
}

const clinicSlice = createSlice({
	name: "form",
	initialState,
	reducers: {
		getClinic(state) {
			return { title: state.title, value: state.value }
		},
		setClinic(state, action: PayloadAction<{ title: string; value: string }>) {
			state.title = action.payload.title
			state.value = action.payload.value
		},
	},
})

export const { getClinic, setClinic } = clinicSlice.actions
export default clinicSlice.reducer
