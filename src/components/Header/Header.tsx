import { Container } from "../Container"
import { Logo } from "../Logo"
import { HeaderWrapper } from "./styled"

function Header() {
	return (
		<HeaderWrapper>
			<Container>
				<Logo />
			</Container>
		</HeaderWrapper>
	)
}

export { Header }
