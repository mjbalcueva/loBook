import { FC } from "react"

import { BookCard } from "@/Components/books/book-card"
import { EmptyState } from "@/Components/empty-state"
import { Book, Page } from "@/types"

import { Paginate } from "../paginate"
import { Separator } from "../ui/separator"

interface Props {
	bookData: Page & {
		data: Book[] | []
	}
	type: "browse" | "upload"
}

const BookList: FC<Props> = ({ bookData, type }) => {
	const link = type === "browse" ? "browse.show" : "uploads.edit"

	return (
		<>
			{bookData.data.length === 0 ? (
				<EmptyState message="No books uploaded yet." />
			) : (
				<>
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
						{bookData.data.map((book) => (
							<BookCard
								key={book.id}
								book={book}
								link={link}
							/>
						))}
					</div>

					<Separator className="mb-4 mt-8" />
					<Paginate bookData={bookData} />
				</>
			)}
		</>
	)
}

export { BookList }
