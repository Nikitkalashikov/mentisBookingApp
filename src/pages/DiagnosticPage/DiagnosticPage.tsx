import { Container } from "@components/Container"
import { Title } from "./styled"
import { FormDiagnostic } from "@components/Form/FormDiagnostic"

function DiagnosticPage() {
	return (
		<Container>
			<Title>Предварительная консультация</Title>
			<FormDiagnostic />
		</Container>
	)
}

export { DiagnosticPage }
