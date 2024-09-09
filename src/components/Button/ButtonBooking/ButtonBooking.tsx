import { useState } from "react"
import { Button } from "../Button"
import { IButtonBooking } from "./type"
import { Box, Modal } from "@mui/material"
import { FormBooking, FormContainer } from "../../Form"

function ButtonBooking({ children, desc, ...props }: IButtonBooking) {
	const [isModalOpen, setModalOpen] = useState<boolean>(false)

	const handleOpen = () => {
		setModalOpen(true)
	}

	const handleClose = () => {
		setModalOpen(false)
	}

	return (
		<>
			<Button onClick={handleOpen} {...props}>
				{children ? children : "Записаться"}
			</Button>
			{isModalOpen && (
				<Modal open={isModalOpen} onClose={handleClose}>
					<Box
						sx={{
							position: "absolute",
							top: 16,
							bottom: "auto",
							left: 0,
							right: 0,
							width: "90%",
							maxWidth: 480,
							height: "fit-content",
							margin: "auto",
						}}
					>
						<FormContainer>
							<FormBooking desc={desc ?? ""} />
						</FormContainer>
					</Box>
				</Modal>
			)}
		</>
	)
}

export { ButtonBooking }
