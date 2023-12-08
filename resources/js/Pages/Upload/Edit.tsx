import { Head } from "@inertiajs/react"
import { FC } from "react"

import { EditBookForm } from "@/Components/upload/edit-book-form"
import { Separator } from "@/Components/ui/separator"
import { Book } from "@/types"

interface Props {
	bookData: Book
}

const Edit: FC<Props> = ({ bookData }) => {
	return (
		<div className="mb-32 space-y-6">
			<Head title="Add book" />
			<div>
				<h2 className="text-2xl font-bold tracking-tight">Edit book</h2>
				<p className="text-sm text-muted-foreground">Edit a book's content</p>
			</div>
			<div>
				<Separator />
			</div>
			<div>
				<EditBookForm book={bookData} />
			</div>
		</div>
	)
}

export default Edit
