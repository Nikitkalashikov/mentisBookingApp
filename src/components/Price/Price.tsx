import { PriceWrapper } from "./styled"
import { IPrice } from "./type"

function Price({ price, label }: IPrice) {
	return (
		<PriceWrapper>
			{label && <span>{label}</span>}
			{price} ₽
		</PriceWrapper>
	)
}

export { Price }
