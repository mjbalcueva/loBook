import { FC } from "react"

import { BookCard } from "@/Components/books/book-card"
import { EmptyState } from "@/Components/empty-state"
import { Book, Page } from "@/types"

interface Props {
	bookData: Page & {
		data: Book[] | []
	}
	link?: string
}

const BookList: FC<Props> = ({ bookData, link }) => {
	return (
		<>
			{bookData.data.length === 0 ? (
				<EmptyState message="No books uploaded yet." />
			) : (
				<div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
					{bookData.data.map((book) => (
						<BookCard
							key={book.id}
							book={book}
							link={link}
						/>
					))}
				</div>
			)}
		</>
	)
}

export { BookList }