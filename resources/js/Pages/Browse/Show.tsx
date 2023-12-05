import { FC } from "react"

import { Book } from "@/types"

interface Props {
	bookData: Book
}

const Show: FC<Props> = ({ bookData }) => {
	return (
		<div>
			<pre>
				<code>{JSON.stringify(bookData, null, 2)}</code>
			</pre>
		</div>
	)
}

export default Show
