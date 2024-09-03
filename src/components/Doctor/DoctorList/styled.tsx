import styled from "styled-components"
import { DoctorCard, DoctorCardSkeleton } from "../DoctorCard"

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

export const DoctorListCardSkeleton = styled(DoctorCardSkeleton)`
	margin-bottom: 16px;

	&:last-child {
		margin-bottom: 0;
	}
`
