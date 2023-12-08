import { Head } from "@inertiajs/react"
import { FC } from "react"

import { BookList } from "@/Components/books/book-list"
import { Book, Page } from "@/types"

interface Props {
	bookData: Page & {
		data: Book[] | []
	}
}

const Browse: FC<Props> = ({ bookData }) => {
	return (
		<>
			<Head title="Browse" />
			<div className="my-4">
				<h2 className="text-3xl font-bold tracking-tight">Browse</h2>
			</div>

			<BookList
				bookData={bookData}
				type="browse"
			/>
		</>
	)
}

export default Browse
