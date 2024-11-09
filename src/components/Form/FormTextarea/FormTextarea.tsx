import React from "react"
import { Textarea } from "@components/Textarea"
import { FormTextareaError, FormTextareaWrapper } from "./styles"
import { IFormTextarea } from "./type"

export const FormTextarea = React.forwardRef<
	HTMLTextAreaElement,
	IFormTextarea
>(({ error, onChange, ...props }, ref) => {
	return (
		<FormTextareaWrapper>
			<Textarea {...props} onChange={onChange} ref={ref} />
			{error && <FormTextareaError>{error}</FormTextareaError>}
		</FormTextareaWrapper>
	)
})
