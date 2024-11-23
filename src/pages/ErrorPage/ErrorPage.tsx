import { Container } from "@components/Container"
import { SubTitle, Title } from "./styled"

function ErrorPage() {
	return (
		<Container>
			<Title>Страница не найдена (</Title>
			<SubTitle>404</SubTitle>
		</Container>
	)
}

export { ErrorPage }
