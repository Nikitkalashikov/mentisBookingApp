import "./App.css"
import { Routes, Route } from "react-router-dom"
import { DoctorPage } from "./pages/Doctor/DoctorPage"
import { HomePage } from "./pages/Home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FilterProvider } from "./utils/providers"
import { useTelegram } from "@hooks/useTelegram"
import { useAnalytics } from "@hooks/useAnalytics"
import { useEffect } from "react"

const queryClient = new QueryClient()

function App() {
	useEffect(() => {
		const { tg } = useTelegram()
		tg.ready()
		if (!tg.isExpanded) {
			tg.expand()
		}

		tg.addToHomeScreen()
	}, [])

	useAnalytics()

	return (
		<QueryClientProvider client={queryClient}>
			<FilterProvider>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/doctor/:id" element={<DoctorPage />} />
					<Route path="*" element={<h1>404 - Страница не найдена</h1>} />
				</Routes>
			</FilterProvider>
		</QueryClientProvider>
	)
}

export default App
