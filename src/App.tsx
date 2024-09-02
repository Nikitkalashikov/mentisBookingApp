import "./App.css"
import { Body } from "./components/Body"
import { Container } from "./components/Container"
import { DoctorList } from "./components/Doctor"
import { Header } from "./components/Header"

function App() {
	return (
		<>
			<Header />
			<Body>
				<Container>
					<DoctorList />
				</Container>
			</Body>
		</>
	)
}

export default App
