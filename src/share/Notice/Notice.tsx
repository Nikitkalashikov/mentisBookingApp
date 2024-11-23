import { NoticeWrapper } from "./styled"
import { INotice } from "./type"

function Notice({ children, ...props }: INotice) {
	return <NoticeWrapper {...props}>{children}</NoticeWrapper>
}

export { Notice }
