import { Container } from "@components/Container"
import { PageContainer, SubTitle, Title } from "./styled"
import { Diagnostic } from "@components/Diagnostic"

function DiagnosticPage() {
	return (
		<PageContainer>
			<Container>
				<SubTitle>Пройдите бесплатно</SubTitle>
				<Title>Предварительную консультацию</Title>
				<Diagnostic />
			</Container>
		</PageContainer>
	)
}

export { DiagnosticPage }
