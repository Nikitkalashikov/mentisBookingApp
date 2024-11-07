import { useDispatch } from "react-redux"
import { Button } from "../Button"
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
	...props
}: IButtonBooking) {
	const dispatch = useDispatch()

	const openFormHandle = () => {
		dispatch(openForm())
		dispatch(setTitle(formTitle))
		dispatch(setSubject(formSubject))
		dispatch(setDescription(formDescription))
	}

	return (
		<Button onClick={openFormHandle} {...props}>
			{children ? children : "Записаться"}
		</Button>
	)
}

export { ButtonBooking }
