import { Container } from "@components/Container"
import { SubTitle, Title } from "./styled"
import { Diagnostic } from "@components/Diagnostic"

function DiagnosticPage() {
	return (
		<Container>
			<SubTitle>Пройдите бесплатно</SubTitle>
			<Title>Предварительную консультацию</Title>
			<Diagnostic />
		</Container>
	)
}

export { DiagnosticPage }
