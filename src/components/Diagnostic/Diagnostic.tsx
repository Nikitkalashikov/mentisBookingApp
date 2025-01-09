import {
	FormDiagnosticBackground,
	FormDiagnosticSlideContent,
	FormDiagnosticSliderBottom,
	FormDiagnosticButton,
	FormDiagnosticSliderContainer,
	FormDiagnosticSliderHead,
	FormDiagnosticSliderNav,
	FormDiagnosticSliderSteps,
	FormDiagnosticTextarea,
	FormDiagnosticTitle,
} from "./styled"

import { useSelector } from "react-redux"
import { useTelegram } from "@hooks/useTelegram"
import { useDispatch } from "react-redux"
import { RootState } from "@store/index"
import { useEffect, useState } from "react"

import { WaveIcon } from "@icons/Wave"
import { handleTextareaChange } from "@utils/helpers/handleInputChange"
import { IFormBookingInputs } from "@components/Form/FormBooking/type"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { getToken } from "@services/api"
import { closeFormDiagnostic } from "@store/slices/formDiagnosticSlice"
import { sendEmail } from "@services/api"
import { FormDesc, FormHead, FormTitle } from "@components/Form/styled"
import { FormButton } from "@components/Form/styled"
import { FormInputPhone } from "@components/Form/FormIpnut/FormInputPhone"
import { FormInput } from "@components/Form/FormIpnut/FormInput"
import { Form } from "@components/Form/Form"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

function Diagnostic() {
	const { tg, user } = useTelegram()

	const dispatch = useDispatch()

	const { title, subject, description, buttonText, questions } = useSelector(
		(state: RootState) => state.formDiagnostic
	)

	const [answers, setAnswers] = useState<{
		[key: number]: { question: string; answer: string }
	}>({})

	const [currentSlide, setCurrentSlide] = useState(1)
	const totalSlides = questions.length + 1

	const [isCurrentSlideFilled, setIsCurrentSlideFilled] = useState(false)

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
				setQuestionTitle("")
				setQuestionPlaceholder("")
				dispatch(closeFormDiagnostic())
				setCurrentSlide(1)
				setIsCurrentSlideFilled(false)
			}
		} catch (error) {
			console.error("Ошибка при отправке заявки", error)
		}
	}

	const [questionTitle, setQuestionTitle] = useState("")
	const [questionPlaceholder, setQuestionPlaceholder] = useState("")

	const handlePrev = () => {
		if (currentSlide !== 1) {
			setCurrentSlide(currentSlide - 1)
		}
	}

	const handleNext = () => {
		const currentAnswer = answers[currentSlide]?.question

		if (currentAnswer !== undefined && currentAnswer.length > 0) {
			setCurrentSlide(currentSlide + 1)
		}
	}

	const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const textarea = handleTextareaChange(e)

		setIsCurrentSlideFilled(textarea.length > 0)

		setAnswers(prevAnswers => ({
			...prevAnswers,
			[currentSlide]: {
				question: questionTitle,
				answer: textarea,
			},
		}))
	}

	useEffect(() => {
		const currentQuestion = questions[currentSlide - 1]

		if (currentSlide !== totalSlides) {
			setQuestionTitle(currentQuestion.question)
			setQuestionPlaceholder(currentQuestion.placeholder)
		} else {
			setQuestionTitle("")
			setQuestionPlaceholder("")
		}
	}, [questions, currentSlide, totalSlides])

	if (!questions) return null

	return (
		<FormDiagnosticSliderContainer>
			{currentSlide < totalSlides ? (
				<>
					<FormDiagnosticSliderHead>
						<FormDiagnosticSliderSteps>
							Шаг {currentSlide} из {totalSlides}
						</FormDiagnosticSliderSteps>
					</FormDiagnosticSliderHead>
					<FormDiagnosticSlideContent>
						<FormDiagnosticTitle>{questionTitle}</FormDiagnosticTitle>
						<FormDiagnosticTextarea
							value={answers[currentSlide]?.answer || ""}
							onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
								handleTextAreaChange(e)
							}
							placeholder={questionPlaceholder}
						/>
					</FormDiagnosticSlideContent>
					<FormDiagnosticSliderBottom>
						<FormDiagnosticSliderNav>
							<FormDiagnosticButton onClick={handlePrev}>
								Предыдущий
							</FormDiagnosticButton>
							<FormDiagnosticButton
								onClick={handleNext}
								disabled={!isCurrentSlideFilled}
							>
								Следующий
							</FormDiagnosticButton>
						</FormDiagnosticSliderNav>
					</FormDiagnosticSliderBottom>
				</>
			) : (
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
								message: "Поле может содержать одно или два слова (Кириллицей)",
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
			)}

			<FormDiagnosticBackground>
				<WaveIcon />
			</FormDiagnosticBackground>
		</FormDiagnosticSliderContainer>
	)
}

export { Diagnostic }
