import Skeleton from "react-loading-skeleton"
import { DoctorCardBody, DoctorCardWrapper } from "./styled"

function DoctorCardSkeleton({ ...props }) {
	return (
		<DoctorCardWrapper {...props}>
			<Skeleton width="100%" height={380} />
			<DoctorCardBody>
				<Skeleton width="100%" height={28} style={{ marginTop: "16px" }} />
				<Skeleton width="100%" height={24} style={{ marginTop: "8px" }} />
				<Skeleton width="100%" height={54} style={{ marginTop: "16px" }} />
				<Skeleton width="100%" height={44} style={{ marginTop: "14px" }} />
			</DoctorCardBody>
		</DoctorCardWrapper>
	)
}

export { DoctorCardSkeleton }
