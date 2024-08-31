import styled from "styled-components"
import { DoctorCard } from "../DoctorCard"
import { Button } from "../../Button"

export const DoctorListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
`

export const DoctorListCard = styled(DoctorCard)`
	margin-bottom: 16px;
`

export const DoctorListButton = styled(Button)`
	margin: 10px auto 0;
`
