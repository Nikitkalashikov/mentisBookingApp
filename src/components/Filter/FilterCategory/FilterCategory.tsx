import { useDoctorsCategories } from "../../../hooks/useDoctorCategories"
import { useFilter } from "../../../hooks/useFilter"
import {
	FilterCategoryButton,
	FilterCategoryList,
	FilterCategoryTitle,
} from "./styled"

import { IFilterCategory } from "./type"

const USERNAME = import.meta.env.MENTIS_USERNAME
const PASSWORD = import.meta.env.MENTIS_PASSWORD

function FilterCategory({ clickHandle }: IFilterCategory) {
	const { category, setCategory } = useFilter()
	const {
		data: doctorsCategories,
		isLoading,
		isError,
		error,
	} = useDoctorsCategories(USERNAME, PASSWORD)

	const handleClick = (category: string) => {
		clickHandle()
		setCategory(category)
	}

	if (isError) {
		return <div>{error?.message}</div>
	}

	if (isLoading || !doctorsCategories) {
		return <div>Skeleton</div>
	}

	return (
		<>
			<FilterCategoryTitle>Специализация:</FilterCategoryTitle>
			<FilterCategoryList>
				{doctorsCategories.map(
					(item: { name: string; slug: string }, key: string) => (
						<FilterCategoryButton
							key={key}
							className={category == item.name ? "active" : ""}
							onClick={() => handleClick(item.name)}
						>
							{item.name}
						</FilterCategoryButton>
					)
				)}
			</FilterCategoryList>
		</>
	)
}

export { FilterCategory }
