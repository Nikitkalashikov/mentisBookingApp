import { TagWrapp } from "./styled"
import { ITag } from "./type"

function Tag({ children, ...props }: ITag) {
	return <TagWrapp {...props}>{children}</TagWrapp>
}

export { Tag }
