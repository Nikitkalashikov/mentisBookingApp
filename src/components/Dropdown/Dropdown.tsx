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

function Dropdown({ icon, current, options, onChange, ...props }: IDropdown) {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(isOpen => !isOpen)
	}

	const handleChange = (e: React.MouseEvent<HTMLDivElement>) => {
		onChange(e)
		setIsOpen(false)
	}

	return (
		<DropdownWrapper {...props}>
			<DropdownValue onClick={handleClick}>
				{icon && <DropdownLocation>{icon}</DropdownLocation>}
				{current.title}
				<DropdownArrow className={isOpen ? "active" : ""}>
					<ArrowDownIcon />
				</DropdownArrow>
			</DropdownValue>
			<DropdownOptions className={isOpen ? "active" : ""}>
				{options.map(option => {
					return (
						<DropdownOption
							key={option.title}
							onClick={handleChange}
							data-value={option.value}
							className={current.value == option.value ? "active" : ""}
						>
							{option.title}
						</DropdownOption>
					)
				})}
			</DropdownOptions>
		</DropdownWrapper>
	)
}
export { Dropdown }
