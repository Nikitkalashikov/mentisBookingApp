import "./App.css"
import { Routes, Route } from "react-router-dom"
import { DoctorPage } from "./pages/Doctor/DoctorPage"
import { HomePage } from "./pages/Home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/doctor/:id" element={<DoctorPage />} />
				<Route path="*" element={<h1>404 - Страница не найдена</h1>} />
			</Routes>
		</QueryClientProvider>
	)
}

export default App
