import { useDoctorsWithCategories } from "../../../hooks/useDoctorWithCategories"
import { useFilter } from "../../../hooks/useFilter"
import {
	FilterCategoryButton,
	FilterCategoryList,
	FilterCategoryTitle,
} from "./styled"

import { IFilterCategory } from "./type"

function FilterCategory({ clickHandle }: IFilterCategory) {
	const { category, setCategory } = useFilter()
	const { uniqueCategories } = useDoctorsWithCategories()

	const handleClick = (category: string) => {
		clickHandle()
		setCategory(category)
	}

	return (
		<>
			<FilterCategoryTitle>Специализация:</FilterCategoryTitle>
			<FilterCategoryList>
				{uniqueCategories.map((item, key) => (
					<FilterCategoryButton
						key={key}
						className={category == item ? "active" : ""}
						onClick={() => handleClick(item)}
					>
						{item}
					</FilterCategoryButton>
				))}
			</FilterCategoryList>
		</>
	)
}

export { FilterCategory }
