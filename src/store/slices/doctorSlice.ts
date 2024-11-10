import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface DoctorState {
	id: string
	clinics: {
		title: string
		slug: string
	}[]
}

const initialState: DoctorState = {
	id: "",
	clinics: [],
}

const doctorSlide = createSlice({
	name: "doctor",
	initialState,
	reducers: {
		setDoctorID(state, action: PayloadAction<{ id: string }>) {
			state.id = action.payload.id
		},
		setDoctorClinics(
			state,
			action: PayloadAction<{ clinics: { title: string; slug: string }[] }>
		) {
			state.clinics = action.payload.clinics
		},
	},
})

export const getDoctorID = (state: { doctor: DoctorState }) => state.doctor.id
export const getDoctorClinics = (state: { doctor: DoctorState }) =>
	state.doctor.clinics

export const { setDoctorID, setDoctorClinics } = doctorSlide.actions
export default doctorSlide.reducer
