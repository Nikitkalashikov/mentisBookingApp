import ArrowDownIcon from "@icons/ArrowDown"
import {
	DropdownArrow,
	DropdownOption,
	DropdownOptions,
	DropdownValue,
	DropdownWrapper,
} from "./styled"
import { IDropdown } from "./type"
import { useState } from "react"

function Dropdown({ icon, placeholder, options, ...props }: IDropdown) {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(isOpen => !isOpen)
	}

	return (
		<DropdownWrapper {...props}>
			<DropdownValue onClick={handleClick}>
				{icon && icon}
				{placeholder}
				<DropdownArrow className={isOpen ? "active" : ""}>
					<ArrowDownIcon />
				</DropdownArrow>
			</DropdownValue>
			<DropdownOptions className={isOpen ? "active" : ""}>
				{options.map(option => {
					return (
						<DropdownOption key={option.slug}>{option.value}</DropdownOption>
					)
				})}
			</DropdownOptions>
		</DropdownWrapper>
	)
}
export { Dropdown }
