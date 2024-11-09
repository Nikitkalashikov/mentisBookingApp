import { Clinics } from "@components/Clinics"
import { Logo } from "../Logo"
import { HeaderContainer, HeaderWrapper } from "./styled"

function Header() {
	return (
		<HeaderWrapper>
			<HeaderContainer>
				<Logo />
				<Clinics />
			</HeaderContainer>
		</HeaderWrapper>
	)
}

export { Header }
