import { Logo } from "../Logo"
import { HeaderContainer, HeaderWrapper } from "./styled"

function Header() {
	return (
		<HeaderWrapper>
			<HeaderContainer>
				<Logo />
			</HeaderContainer>
		</HeaderWrapper>
	)
}

export { Header }
