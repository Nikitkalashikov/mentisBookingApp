import { DoctorCardWrapper } from "./styled"

interface IDoctorCard {
	children: React.ReactNode
}

function DoctorCard({ children }: IDoctorCard) {
	return <DoctorCardWrapper>{children}</DoctorCardWrapper>
}

export { DoctorCard }
