import "./App.css"
import { Routes, Route } from "react-router-dom"
import { DoctorPage } from "./pages/Doctor/DoctorPage"
import { HomePage } from "./pages/Home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FilterProvider } from "./utils/providers"
import { useTelegram } from "@hooks/useTelegram"
import { useAnalytics } from "@hooks/useAnalytics"

const queryClient = new QueryClient()

function App() {
	const { tg } = useTelegram()

	if (!tg.isExpanded) {
		tg.expand()
	}

	tg.ready()

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
