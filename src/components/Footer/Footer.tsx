import { Container } from "../Container"
import { FooterWrapper } from "./styled"
import { IFooter } from "./type"

function Footer({ children, ...props }: IFooter) {
	return (
		<FooterWrapper {...props}>
			<Container>{children}</Container>
		</FooterWrapper>
	)
}

export { Footer }
