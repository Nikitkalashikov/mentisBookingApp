import "./App.css"
import { Body } from "./components/Body"
import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { Routes, Route } from "react-router-dom"
import { DoctorPage } from "./pages/Doctor/DoctorPage"
import { HomePage } from "./pages/Home"

function App() {
	return (
		<>
			<Header />
			<Body>
				<Container>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/doctor/:id" element={<DoctorPage />} />
						<Route path="*" element={<h1>404 - Страница не найдена</h1>} />
					</Routes>
				</Container>
			</Body>
		</>
	)
}

export default App
