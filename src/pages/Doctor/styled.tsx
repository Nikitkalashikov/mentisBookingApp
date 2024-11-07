import { Link } from "react-router-dom"
import styled from "styled-components"
import { Body } from "../../components/Body"

export const DoctorPageBody = styled(Body)``

export const DoctorPageBackLink = styled(Link)`
	margin-bottom: 16px;
	display: flex;
	padding: 12px;
	text-align: center;
	color: var(--thirdy-color);
	font-size: 16px;
	line-height: 24px;
	transition: 0.5s ease;

	svg {
		margin-right: 6px;
		width: 24px;
		height: 24px;
		transform: rotate(180deg);
	}
`
