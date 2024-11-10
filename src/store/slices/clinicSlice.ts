import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ClinicsState {
	slug: string
	title: string
}

const initialState: ClinicsState = {
	title: "Все клиники",
	slug: "all",
}

const clinicSlice = createSlice({
	name: "clinics",
	initialState,
	reducers: {
		getClinic(state) {
			return state
		},
		setClinic(state, action: PayloadAction<{ title: string; slug: string }>) {
			state.title = action.payload.title
			state.slug = action.payload.slug
		},
	},
})

export const { getClinic, setClinic } = clinicSlice.actions
export default clinicSlice.reducer
