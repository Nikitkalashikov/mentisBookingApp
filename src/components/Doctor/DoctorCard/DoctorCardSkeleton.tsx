import { Skeleton } from "@mui/material"
import { DoctorCardBody, DoctorCardWrapper } from "./styled"

function DoctorCardSkeleton({ ...props }) {
	return (
		<DoctorCardWrapper {...props}>
			<Skeleton variant="rounded" width="100%" height={280} />
			<DoctorCardBody>
				<Skeleton
					variant="rounded"
					width="100%"
					height={28}
					sx={{ marginTop: "16px" }}
				/>
				<Skeleton
					variant="rounded"
					width="100%"
					height={24}
					sx={{ marginTop: "8px" }}
				/>
				<Skeleton
					variant="rounded"
					width={90}
					height={26}
					sx={{ marginTop: "16px" }}
				/>
				<Skeleton
					variant="rounded"
					width="100%"
					height={54}
					sx={{ marginTop: "16px" }}
				/>
				<Skeleton
					variant="rounded"
					width="100%"
					height={44}
					sx={{ marginTop: "14px" }}
				/>
			</DoctorCardBody>
		</DoctorCardWrapper>
	)
}

export { DoctorCardSkeleton }
