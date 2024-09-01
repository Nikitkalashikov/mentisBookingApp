import styled from "styled-components"
import { DoctorCard } from "../DoctorCard"

export const DoctorListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
`

export const DoctorListCard = styled(DoctorCard)`
	margin-bottom: 16px;

	&:last-child {
		margin-bottom: 0;
	}
`
