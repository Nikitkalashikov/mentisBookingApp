export const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	let input = e.target.value.trim()
	input = input.replace(/<\/?[^>]+(>|$)/g, "")

	return input
}

export const handleTextareaChange = (
	e: React.ChangeEvent<HTMLTextAreaElement>
) => {
	let input = e.target.value.trim()
	input = input.replace(/<\/?[^>]+(>|$)/g, "")

	return input
}
