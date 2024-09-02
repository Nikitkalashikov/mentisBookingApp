import "./App.css"
import { Body } from "./components/Body"
import { Container } from "./components/Container"
import { DoctorList } from "./components/Doctor"
import { FiltersDoctor } from "./components/Filters"
import { Header } from "./components/Header"
import { Routes, Route } from "react-router-dom"
import { DoctorPage } from "./pages/DoctorPage"

function App() {
	return (
		<>
			<Header />
			<Body>
				<Container>
					<Routes>
						<Route path="/" element={<DoctorList />} />
						<Route path="/doctor/:id" element={<DoctorPage />} />
						<Route path="*" element={<h1>404 - Страница не найдена</h1>} />
					</Routes>
				</Container>
			</Body>
			<FiltersDoctor />
		</>
	)
}

export default App
