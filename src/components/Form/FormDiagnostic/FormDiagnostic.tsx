import { useSelector } from "react-redux"
import { RootState } from "@store/index"

import "swiper/css/effect-fade"
import { Container } from "@components/Container"
import { Diagnostic } from "@components/Diagnostic"

function FormDiagnostic() {
	const { isOpen } = useSelector((state: RootState) => state.formDiagnostic)

	if (!isOpen) return null

	return (
		// <div open={isOpen} onClose={formCloseHandle}>
		<div>
			<div
				id="formOrder"
				style={{
					position: "fixed",
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					height: "100vh",
					margin: "auto",
					background: "#ffffff",
					padding: "24px 0 24px 0",
					zIndex: 1000,
				}}
			>
				<Container>
					<Diagnostic isCloseHandle={true} />
				</Container>
			</div>
		</div>
	)
}

export { FormDiagnostic }
