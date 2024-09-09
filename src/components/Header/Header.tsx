import { Label } from "../Label"
import { Logo } from "../Logo"
import { HeaderContainer, HeaderWrapper } from "./styled"

function Header() {
	return (
		<HeaderWrapper>
			<HeaderContainer>
				<Logo />
				<Label>Сервис записи на прием</Label>
			</HeaderContainer>
		</HeaderWrapper>
	)
}

export { Header }
