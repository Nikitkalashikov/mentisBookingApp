import { ChangeEventHandler, useState } from "react"
import { FiltersDoctorList, FiltersDoctorWrapper } from "./styled"

import { FilterProfile } from "../../Filter"
import { Box, Modal } from "@mui/material"

function FiltersDoctor(
	selectedCategory: string,
	onCategoryChange: ChangeEventHandler | undefined
) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleModal = () => setIsOpen(!isOpen)

	return (
		<>
			<FiltersDoctorWrapper>
				<FiltersDoctorList>
					<FilterProfile
						// selectedCategory={selectedCategory}
						// onChange={onCategoryChange}
						onClick={toggleModal}
					/>
					{/* <FilterPrice
						priceRange={priceRange}
						onChange={onPriceChange}
						onClick={toggleModal}
					/> */}
				</FiltersDoctorList>
			</FiltersDoctorWrapper>

			{isOpen && (
				<Modal open={isOpen} onClose={toggleModal}>
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
						<select value={selectedCategory || ""} onChange={onCategoryChange}>
							<option value="">All Categories</option>
							<option value="psihoterapija">Психотерапевт</option>
							<option value="psiholog">Психолог</option>
						</select>
					</Box>
				</Modal>
			)}
		</>
	)
}

export { FiltersDoctor }
