import Skeleton from "react-loading-skeleton"

function DoctorProfileSkeleton() {
	return (
		<>
			<Skeleton width="100%" height={520} />
			<Skeleton
				width="100%"
				height={56}
				style={{
					marginTop: "24px",
					marginBottom: "32px",
				}}
			/>
			<Skeleton
				width="100%"
				height={300}
				style={{
					marginBottom: "24px",
				}}
			/>
			<Skeleton
				width="100%"
				height={300}
				style={{
					marginBottom: "24px",
				}}
			/>
			<Skeleton
				width="100%"
				height={34}
				style={{
					marginBottom: "24px",
				}}
			/>
			<Skeleton width="100%" height={192} />
		</>
	)
}

export { DoctorProfileSkeleton }
