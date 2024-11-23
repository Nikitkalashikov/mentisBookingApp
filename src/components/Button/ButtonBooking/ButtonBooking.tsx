import { useDispatch } from "react-redux"
import { Button } from "@share/Button"
import { IButtonBooking } from "./type"
import {
	openForm,
	setSubject,
	setDescription,
	setTitle,
} from "@store/slices/formSlice"

function ButtonBooking({
	formTitle,
	formSubject,
	formDescription,
	children,
	onClick,
	...props
}: IButtonBooking) {
	const dispatch = useDispatch()

	const openFormHandle = () => {
		dispatch(openForm())
		dispatch(setTitle(formTitle))
		dispatch(setSubject(formSubject))
		dispatch(setDescription(formDescription))
		onClick()
	}

	return (
		<Button onClick={openFormHandle} {...props}>
			{children ? children : "Записаться"}
		</Button>
	)
}

export { ButtonBooking }
