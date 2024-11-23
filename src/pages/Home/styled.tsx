import styled from "styled-components"
import { CreatedBy } from "@components/CreatedBy"
import { Body } from "@components/Body"
import { Banner } from "@components/Banner"
import { NoticeHomeIcon } from "@components/Notice"

export const CreatedByWrapper = styled(CreatedBy)`
	margin-top: var(--size-6);
	display: flex;
	justify-content: center;
`

export const HomePageBody = styled(Body)``

export const HomePageBanner = styled(Banner)`
	margin-bottom: var(--size-6);
`

export const HomePageNotice = styled(NoticeHomeIcon)`
	margin-bottom: var(--size-6);
`
