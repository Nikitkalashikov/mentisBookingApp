import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
	DoctorPageBackLink,
	DoctorPageBlock,
	DoctorPageBlockContent,
	DoctorPageBlockInner,
	DoctorPageBlockTitle,
	DoctorPageBody,
	DoctorPageButton,
	DoctorPageCategories,
	DoctorPageDirections,
	DoctorPageDirectionsItem,
	DoctorPageGallery,
	DoctorPageThumbnail,
	DoctorPageTitle,
} from "./styled"
import { getDoctorByID, getToken } from "../../services/api"
import ArrowIcon from "../../assets/icons/Arrow"
import { Container } from "../../components/Container"
import { Box, Modal } from "@mui/material"
import { FormBooking, FormContainer } from "../../components/Form"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

function DoctorPage() {
	const { id } = useParams<{ id: string }>()
	const [token, setToken] = useState<string | null>(null)
	const [doctor, setDoctor] = useState<any>(null)
	const [error, setError] = useState<string | null>(null)
	const [isModalOpen, setModalOpen] = useState<boolean>(false)

	useEffect(() => {
		const fetchToken = async () => {
			try {
				const token = await getToken(USERNAME, PASSWORD)
				setToken(token)
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message)
				} else {
					setError("Неизвестная ошибка")
				}
			}
		}

		fetchToken()
	}, [])

	useEffect(() => {
		const fetchDoctor = async () => {
			if (!token) return
			try {
				if (!id) throw new Error("ID доктора не найден")
				const doctor = await getDoctorByID(token, id)
				setDoctor(doctor)
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message)
				} else {
					setError("Неизвестная ошибка")
				}
			}
		}

		fetchDoctor()
	}, [token, id])

	const handleOpen = () => {
		setModalOpen(true)
	}

	const handleClose = () => {
		setModalOpen(false)
	}

	if (error) {
		return <div>{error}</div>
	}

	console.log(doctor)
	return (
		<DoctorPageBody>
			<Container>
				{!doctor ? (
					<p>Loading</p>
				) : (
					<>
						<DoctorPageThumbnail>
							<img src={doctor.thumbnail_url} alt={doctor.fio} />
							<DoctorPageButton onClick={handleOpen}>
								Записаться
							</DoctorPageButton>
						</DoctorPageThumbnail>

						<DoctorPageBlock className="focus">
							<DoctorPageTitle>{doctor.fio}</DoctorPageTitle>
							{doctor.doctor_categories && (
								<DoctorPageCategories>
									{doctor.doctor_categories
										.map((category: { name: string }) => category.name)
										.join(", ")}
								</DoctorPageCategories>
							)}
						</DoctorPageBlock>

						{doctor.directions && (
							<DoctorPageBlock className="wave1">
								<DoctorPageBlockInner>
									<DoctorPageBlockTitle>
										Работает с запросами:
									</DoctorPageBlockTitle>
									<DoctorPageDirections>
										{doctor.directions.map(
											(direction: { name: string }, index: number) => (
												<DoctorPageDirectionsItem key={index}>
													{direction.name}
												</DoctorPageDirectionsItem>
											)
										)}
									</DoctorPageDirections>
								</DoctorPageBlockInner>
							</DoctorPageBlock>
						)}

						{doctor.education.text && (
							<DoctorPageBlock>
								<DoctorPageBlockTitle>Образование:</DoctorPageBlockTitle>
								<DoctorPageBlockContent
									dangerouslySetInnerHTML={{ __html: doctor.education.text }}
								/>
							</DoctorPageBlock>
						)}

						{doctor.sertificates && (
							<DoctorPageGallery
								galleryId="sertificates"
								gallery={doctor.sertificates.map(
									(item: { url: string; alt: string }) => ({
										url: item.url,
										alt: item.alt,
									})
								)}
							/>
						)}

						<DoctorPageBackLink to={"/"}>
							<ArrowIcon /> К списку врачей
						</DoctorPageBackLink>
					</>
				)}
			</Container>
			{isModalOpen && (
				<Modal open={isModalOpen} onClose={handleClose}>
					<Box
						sx={{
							position: "absolute",
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
							width: 460,
							height: "fit-content",
							margin: "auto",
						}}
					>
						<FormContainer>
							<FormBooking desc={`Доктор: ${doctor.fio}`} />
						</FormContainer>
					</Box>
				</Modal>
			)}
		</DoctorPageBody>
	)
}

export { DoctorPage }
