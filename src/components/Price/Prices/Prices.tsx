import { PricesWrapper } from "./styled"
import { IPrices } from "./type"

function Prices({ children }: IPrices) {
	return <PricesWrapper>{children}</PricesWrapper>
}

export { Prices }
