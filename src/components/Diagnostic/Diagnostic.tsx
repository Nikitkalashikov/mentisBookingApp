import {
	FormDiagnosticBackground,
	FormDiagnosticClosed,
	FormDiagnosticSlide,
	FormDiagnosticSlideContent,
	FormDiagnosticSlider,
	FormDiagnosticSliderBottom,
	FormDiagnosticSliderButton,
	FormDiagnosticSliderContainer,
	FormDiagnosticSliderHead,
	FormDiagnosticSliderNav,
	FormDiagnosticSliderSteps,
	FormDiagnosticTextarea,
	FormDiagnosticTitle,
} from "./styled"
import { closeFormDiagnostic } from "@store/slices/formDiagnosticSlice"
import { useSelector } from "react-redux"
import { useTelegram } from "@hooks/useTelegram"
import { useDispatch } from "react-redux"
import { RootState } from "@store/index"
import { useRef, useState } from "react"
import { handleInputChange } from "@utils/helpers/handleInputChange"
import { sendEmail } from "@services/api"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { IFormBookingInputs } from "@components/Form/FormDiagnostic/type"
import { getToken } from "@services/api"
import CloseIcon from "@icons/Close"
import { EffectFade, Navigation } from "swiper/modules"
import {
	FormButton,
	FormDesc,
	FormHead,
	FormTitle,
} from "@components/Form/styled"
import { FormInputPhone } from "@components/Form/FormIpnut"
import { FormInput } from "@components/Form/FormIpnut"
import { WaveIcon } from "@icons/Wave"
import { Form } from "@components/Form/Form"
import { Button } from "@share/Button"
import { Swiper as SwiperType } from "swiper"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

interface IDiagnostic {
	isCloseHandle?: boolean
}

function Diagnostic({ isCloseHandle = false }: IDiagnostic) {
	const { tg, user } = useTelegram()

	const dispatch = useDispatch()

	const { title, subject, description, buttonText, questions } = useSelector(
		(state: RootState) => state.formDiagnostic
	)

	const [currentSlide, setCurrentSlide] = useState(1)
	const totalSlides = questions.length + 1

	const [answers, setAnswers] = useState<{
		[key: number]: { question: string; answer: string }
	}>({})
	const isCurrentSlideFilled =
		answers[currentSlide]?.answer && answers[currentSlide].answer.trim() !== ""

	const handleTextAreaChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number,
		question: string
	) => {
		const input = handleInputChange(e)

		setAnswers(prevAnswers => ({
			...prevAnswers,
			[index]: {
				question: question,
				answer: input,
			},
		}))
	}

	const swiperRef = useRef<SwiperType | null>(null)

	const setActiveSlide = (index: number) => {
		if (swiperRef.current) {
			swiperRef.current.slideTo(index)
		}
	}

	const formCloseHandle = () => {
		dispatch(closeFormDiagnostic())
	}

	const {
		formState: { errors },
		control,
		reset,
		handleSubmit,
	} = useForm<IFormBookingInputs>({
		mode: "onChange",
		defaultValues: {
			name: user?.first_name ?? "",
			tel: "",
		},
	})

	const onSubmit: SubmitHandler<IFormBookingInputs> = async formData => {
		try {
			const token = await getToken(USERNAME, PASSWORD)

			const message = answers
				? Object.values(answers)
						.map(row => `<b>${row.question}:</b> ${row.answer}`)
						.join("\n\n\n")
				: description

			const response = await sendEmail(token, {
				subject: subject,
				fio: formData.name,
				tel: formData.tel,
				message: message,
			})

			if (response.status === true) {
				if (tg) {
					tg.showConfirm(response.message)
				}
				reset()
				setAnswers({})
				setCurrentSlide(1)
				setActiveSlide(1)
				dispatch(closeFormDiagnostic())
			}
		} catch (error) {
			console.error("Ошибка при отправке заявки", error)
		}
	}

	if (!questions) return null

	return (
		<FormDiagnosticSliderContainer>
			<FormDiagnosticSliderHead>
				<FormDiagnosticSliderSteps>
					Шаг {currentSlide} из {totalSlides}
				</FormDiagnosticSliderSteps>
				{isCloseHandle && (
					<FormDiagnosticClosed onClick={formCloseHandle}>
						<CloseIcon />
					</FormDiagnosticClosed>
				)}
			</FormDiagnosticSliderHead>
			<FormDiagnosticSlider
				autoHeight={true}
				effect={"fade"}
				modules={[EffectFade, Navigation]}
				spaceBetween={0}
				slidesPerView={1}
				allowTouchMove={false}
				onSwiper={swiper => (swiperRef.current = swiper)}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				onSlideChange={swiper => setCurrentSlide(swiper.activeIndex + 1)}
			>
				{questions.map(question => (
					<FormDiagnosticSlide key={question.question}>
						<FormDiagnosticSlideContent>
							<FormDiagnosticTitle>{question.question}</FormDiagnosticTitle>
							<FormDiagnosticTextarea
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									handleTextAreaChange(e, currentSlide, question.question)
								}
								placeholder={question.placeholder}
							/>
						</FormDiagnosticSlideContent>
					</FormDiagnosticSlide>
				))}
				<FormDiagnosticSlide>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<FormHead>
							<FormTitle>{title}</FormTitle>
							{description && <FormDesc>{description}</FormDesc>}
						</FormHead>
						<Controller
							control={control}
							name="name"
							rules={{
								minLength: {
									value: 3,
									message: "Имя должно содержаить больше 3 символов",
								},
								maxLength: {
									value: 18,
									message: "Поле не может содержать больше 18 символов",
								},
								pattern: {
									value: /^[А-Яа-я]+(\s[А-Яа-я]+)?$/i,
									message:
										"Поле может содержать одно или два слова (Кириллицей)",
								},
								required: "Введите имя",
							}}
							render={({ field }) => (
								<FormInput
									type="text"
									error={errors.name?.message}
									placeholder="Имя"
									{...field}
								/>
							)}
						/>
						<Controller
							control={control}
							name="tel"
							rules={{
								required: "Введите телефон",
								pattern: {
									value: /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/,
									message: "Введите корректный номер телефона",
								},
							}}
							render={({ field }) => (
								<FormInputPhone
									type="tel"
									error={errors.tel?.message}
									placeholder="+7 (000) 000 00 00"
									{...field}
								/>
							)}
						/>

						<FormButton>{buttonText}</FormButton>
					</Form>
				</FormDiagnosticSlide>
			</FormDiagnosticSlider>
			{totalSlides > currentSlide && (
				<FormDiagnosticSliderBottom>
					<FormDiagnosticSliderNav>
						<FormDiagnosticSliderButton className="swiper-button-prev">
							Предыдущий
						</FormDiagnosticSliderButton>
						<FormDiagnosticSliderButton
							className="swiper-button-next"
							disabled={!isCurrentSlideFilled}
						>
							Следующий
						</FormDiagnosticSliderButton>
					</FormDiagnosticSliderNav>
				</FormDiagnosticSliderBottom>
			)}
			<FormDiagnosticBackground>
				<WaveIcon />
			</FormDiagnosticBackground>
		</FormDiagnosticSliderContainer>
	)
}

export { Diagnostic }
