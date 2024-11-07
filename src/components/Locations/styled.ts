import styled from "styled-components"

export const LocationsWrapp = styled.div`
	display: flex;
	flex-direction: column;
`

export const LocationsList = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	flex-wrap: wrap;
`

export const LocationTitle = styled.p`
	font-size: 14px;
	line-height: 22px;
	color: var(--gray-dark-color);
`

export const Location = styled.div`
	display: flex;
	align-items: center;
	font-size: 16px;
	line-height: 24px;

	svg {
		margin-right: 4px;
		width: 18px;
		height: 18px;
	}
`
