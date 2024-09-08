import { Skeleton } from "@mui/material"

function DoctorProfileSkeleton() {
	return (
		<>
			<Skeleton variant="rounded" width="100%" height={520} />
			<Skeleton
				variant="rounded"
				width="100%"
				height={56}
				style={{
					marginTop: "24px",
					marginBottom: "32px",
				}}
			/>
			<Skeleton
				variant="rounded"
				width="100%"
				height={300}
				style={{
					marginBottom: "24px",
				}}
			/>
			<Skeleton
				variant="rounded"
				width="100%"
				height={300}
				style={{
					marginBottom: "24px",
				}}
			/>
			<Skeleton
				variant="rounded"
				width="100%"
				height={34}
				style={{
					marginBottom: "24px",
				}}
			/>
			<Skeleton variant="rounded" width="100%" height={192} />
		</>
	)
}

export { DoctorProfileSkeleton }
