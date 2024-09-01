import styled from "styled-components"
import { DoctorCard } from "../DoctorCard"

export const DoctorListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const DoctorListCard = styled(DoctorCard)`
	margin-bottom: 16px;

	&:last-child {
		margin-bottom: 0;
	}
`
