import { FC, HTMLAttributes } from "react"

import { Page } from "@/types"

interface Props extends HTMLAttributes<HTMLDivElement> {
	bookData: Page
}
const Paginate: FC<Props> = ({ bookData: pageData, ...props }) => {
	const { current_page, last_page, next_page_url, prev_page_url } = pageData
	return (
		<div {...props}>
			<h1>Love</h1>
		</div>
	)
}

export { Paginate }
