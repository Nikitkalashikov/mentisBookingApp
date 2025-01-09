import React from "react"
import { Textarea } from "@components/Textarea"
import { FormTextareaError, FormTextareaWrapper } from "./styles"
import { IFormTextarea } from "./type"

export const FormTextarea = React.forwardRef<
	HTMLTextAreaElement,
	IFormTextarea
>(({ error, onChange, value, ...props }, ref) => {
	return (
		<FormTextareaWrapper>
			<Textarea {...props} onChange={onChange} value={value} ref={ref} />
			{error && <FormTextareaError>{error}</FormTextareaError>}
		</FormTextareaWrapper>
	)
})
