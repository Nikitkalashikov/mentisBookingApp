import { useTelegram } from "../../hooks/useTelegram"
import { Container } from "../Container"
import { Logo } from "../Logo"
import { HeaderWrapper } from "./styled"

function Header() {
	const { user } = useTelegram()

	return (
		<HeaderWrapper>
			<Container>
				<Logo />
				{user && <p>Привет {user.first_name}</p>}
			</Container>
		</HeaderWrapper>
	)
}

export { Header }
