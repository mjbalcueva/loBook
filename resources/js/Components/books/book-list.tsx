import { FC } from "react"

import { BookCard } from "@/Components/books/book-card"
import { EmptyState } from "@/Components/empty-state"
import { Book, Paginate } from "@/types"

interface Props {
	bookData: Paginate & {
		data: Book[] | []
	}
}

const BookList: FC<Props> = ({ bookData }) => {
	return (
		<>
			{bookData.data.length === 0 ? (
				<EmptyState message="No books uploaded yet." />
			) : (
				<div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
					{bookData.data.map((book) => (
						<BookCard book={book} />
					))}
				</div>
			)}
		</>
	)
}

export { BookList }
