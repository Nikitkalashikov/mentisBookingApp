import { DoctorCardWrapper } from "./styled"

interface IDoctorCard {
	children: React.ReactNode
}

function DoctorCard({ children, ...props }: IDoctorCard) {
	return <DoctorCardWrapper {...props}>{children}</DoctorCardWrapper>
}

export { DoctorCard }
