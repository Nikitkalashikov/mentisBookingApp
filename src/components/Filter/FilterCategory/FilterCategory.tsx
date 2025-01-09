import { useDoctorsCategories } from "@hooks/useDoctorCategories"
import { useFilter } from "@hooks/useFilter"
import {
	FilterCategoryButton,
	FilterCategoryList,
	FilterCategorySlide,
	FilterCategorySlider,
} from "./styled"

import "swiper/swiper-bundle.css"
import Skeleton from "react-loading-skeleton"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

function FilterCategory() {
	const { category, setCategory } = useFilter()
	const {
		data: doctorsCategories,
		isLoading,
		isError,
		error,
	} = useDoctorsCategories(USERNAME, PASSWORD)

	const handleClick = (category: string) => {
		setCategory(category)
	}

	if (isError) {
		return <div>{error?.message}</div>
	}

	if (isLoading || !doctorsCategories) {
		return (
			<Skeleton
				style={{
					marginBottom: "6px",
				}}
				width="100%"
				height={44}
			/>
		)
	}

	return (
		<FilterCategoryList>
			<FilterCategorySlider spaceBetween={8} slidesPerView="auto">
				{doctorsCategories.map(
					(item: { name: string; slug: string }, index: string) => (
						<FilterCategorySlide key={index}>
							<FilterCategoryButton
								className={category == item.name ? "active" : ""}
								onClick={() => handleClick(item.name)}
							>
								{item.name}
							</FilterCategoryButton>
						</FilterCategorySlide>
					)
				)}
			</FilterCategorySlider>
		</FilterCategoryList>
	)
}

export { FilterCategory }
