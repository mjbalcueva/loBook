import { FC } from "react"

import { Book, Page } from "@/types"

interface Props {
	bookData: Page
}
const Paginate: FC<Props> = ({ bookData }) => {
	const { current_page, last_page, next_page_url, prev_page_url } = bookData
	return <></>
}

export { Paginate }
