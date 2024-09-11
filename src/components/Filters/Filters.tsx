import { useEffect, useState } from "react"
import {
	FiltersButton,
	FiltersModal,
	FiltersModalContent,
	FiltersWrapper,
} from "./styled"
import { IFilters } from "./type"
import DoctorIcon from "../../assets/icons/Doctor"
import { FilterCategory } from "../Filter"

function Filters({ ...props }: IFilters) {
	const [isOpen, setIsOpen] = useState(false)
	const [isActive, setIsActive] = useState(false)

	const openFiltersHandler = () => {
		if (!isOpen) {
			setIsOpen(true)
			setTimeout(() => setIsActive(true), 10)
		} else {
			setIsActive(false)
			setTimeout(() => setIsOpen(false), 300)
		}
	}

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = ""
		}

		return () => {
			document.body.style.overflow = ""
		}
	}, [isOpen])

	return (
		<>
			<FiltersWrapper className={isOpen ? "active" : ""} {...props}>
				<FiltersButton onClick={openFiltersHandler}>
					<DoctorIcon />
				</FiltersButton>
			</FiltersWrapper>
			{isOpen && (
				<FiltersModal className={isActive ? "active" : ""}>
					<FiltersModalContent>
						<FilterCategory clickHandle={openFiltersHandler} />
					</FiltersModalContent>
				</FiltersModal>
			)}
		</>
	)
}

export { Filters }
