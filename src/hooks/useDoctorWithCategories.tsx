// import { useMemo } from "react"
// import { useDoctors } from "./useDoctors"
// import { IDoctorCard } from "../components/Doctor"
// import { useDoctorsCategories } from "./useDoctorCategories"

// export const useDoctorsWithCategories = () => {
// 	const USERNAME = import.meta.env.MENTIS_USERNAME
// 	const PASSWORD = import.meta.env.MENTIS_PASSWORD

// 	const {
// 		data: doctors = [],
// 		isLoading,
// 		isError,
// 		error,
// 	} = useDoctors(USERNAME, PASSWORD)

// 	const {
// 		data: doctorsCategories = [],
// 		// isLoading,
// 		// isError,
// 		// error,
// 	} = useDoctorsCategories(USERNAME, PASSWORD)

// 	// const uniqueCategories = useMemo(() => {
// 	// 	const categoriesSet = new Set<string>()
// 	// 	doctors.forEach((doctor: IDoctorCard) => {
// 	// 		doctor.doctor_categories?.forEach(
// 	// 			(category: { name: string; slug: string }) => {
// 	// 				categoriesSet.add(category.name)
// 	// 			}
// 	// 		)
// 	// 	})
// 	// 	return Array.from(categoriesSet)
// 	}, [doctors, doctorsCategories])

// 	return { doctors, doctorsCategories, isError, isLoading, error }
// }
