import "./App.css"
import { Routes, Route } from "react-router-dom"
import { DoctorPage } from "./pages/Doctor/DoctorPage"
import { HomePage } from "./pages/Home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FilterProvider } from "./utils/providers"
import { useTelegram } from "@hooks/useTelegram"
import { useAnalytics } from "@hooks/useAnalytics"
import { useEffect } from "react"
import { ErrorPage } from "@pages/ErrorPage"
import { DiagnosticPage } from "@pages/DiagnosticPage"

const queryClient = new QueryClient()

function App() {
	const { tg } = useTelegram()

	useEffect(() => {
		tg.ready()

		if (!tg.isExpanded) {
			tg.expand()
		}
	}, [])

	useAnalytics()

	return (
		<QueryClientProvider client={queryClient}>
			<FilterProvider>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/doctor/:id" element={<DoctorPage />} />
					<Route path="/diagnostic" element={<DiagnosticPage />} />
					<Route path="/clinic/diagnostic" element={<DiagnosticPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</FilterProvider>
		</QueryClientProvider>
	)
}

export default App
