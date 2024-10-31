type Price = {
	first_pay?: number
	first_pay_sale?: number
	second_pay?: number
	second_pay_sale?: number
}

type MinMaxPrices = {
	first_pay: number | null
	second_pay: number | null
} | null

export function getMinMax(prices: Price[]): MinMaxPrices {
	if (!prices || prices.length === 0) {
		return null
	}

	if (!Array.isArray(prices)) {
		prices = [prices]
	}

	const firstPrices: number[] = []
	const secondPrices: number[] = []

	prices.forEach(price => {
		if (price.first_pay) firstPrices.push(price.first_pay)
		if (price.first_pay_sale) firstPrices.push(price.first_pay_sale)
		if (price.second_pay) secondPrices.push(price.second_pay)
		if (price.second_pay_sale) secondPrices.push(price.second_pay_sale)
	})

	const filteredFirstPrices = firstPrices.filter(Boolean)
	const filteredSecondPrices = secondPrices.filter(Boolean)

	const firstPay =
		filteredFirstPrices.length > 0 ? Math.min(...filteredFirstPrices) : null
	const secondPay =
		filteredSecondPrices.length > 0 ? Math.min(...filteredSecondPrices) : null

	return {
		first_pay: firstPay,
		second_pay: secondPay,
	}
}
