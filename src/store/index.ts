import { configureStore } from "@reduxjs/toolkit"
import formReducer from "./slices/formSlice"
import formDiagnosticReducer from "./slices/formDiagnosticSlice"
import clinicReducer from "./slices/clinicSlice"
import doctorReducer from "./slices/doctorSlice"

export const store = configureStore({
	reducer: {
		form: formReducer,
		formDiagnostic: formDiagnosticReducer,
		clinic: clinicReducer,
		doctor: doctorReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
