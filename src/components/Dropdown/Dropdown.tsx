import ArrowDownIcon from "@icons/ArrowDown"
import {
	DropdownArrow,
	DropdownLocation,
	DropdownOption,
	DropdownOptions,
	DropdownValue,
	DropdownWrapper,
} from "./styled"
import { IDropdown } from "./type"
import { useState } from "react"

function Dropdown({ icon, placeholder, options, ...props }: IDropdown) {
	const [isOpen, setIsOpen] = useState(false)
	const [current, setCurrent] = useState(placeholder)

	const handleClick = () => {
		setIsOpen(isOpen => !isOpen)
	}

	const handleChange = () => {
		// const value = e.target.setCurrent(value)

		setCurrent("")
	}

	return (
		<DropdownWrapper {...props}>
			<DropdownValue onClick={handleClick}>
				{icon && <DropdownLocation>{icon}</DropdownLocation>}
				{current}
				<DropdownArrow className={isOpen ? "active" : ""}>
					<ArrowDownIcon />
				</DropdownArrow>
			</DropdownValue>
			<DropdownOptions className={isOpen ? "active" : ""}>
				<DropdownOption
					data-value="all"
					onClick={handleChange}
					className="active"
				>
					{placeholder}
				</DropdownOption>
				{options.map(option => {
					return (
						<DropdownOption
							key={option.slug}
							onClick={handleChange}
							data-value={option.slug}
						>
							{option.value}
						</DropdownOption>
					)
				})}
			</DropdownOptions>
		</DropdownWrapper>
	)
}
export { Dropdown }
