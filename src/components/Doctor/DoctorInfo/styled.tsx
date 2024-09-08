import styled from "styled-components"

export const DoctorInfoList = styled.div`
	margin-top: 12px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
`

export const DoctorInfoCategory = styled.span`
	padding-right: 4px;
	font-size: 16px;
	line-height: 24px;
	color: var(--white-color);

	&:last-of-type {
		padding-right: 0;
	}
`

export const DoctorInfoExperience = styled.span`
	position: relative;
	font-size: 16px;
	line-height: 24px;
	padding-left: 18px;

	&:before {
		content: "";
		position: absolute;
		display: block;
		width: 5px;
		height: 5px;
		left: 6px;
		top: 10px;
		border-radius: 50%;
		background-color: var(--white-color);
	}
`
