import { Head } from "@inertiajs/react"
import { FC } from "react"

import { Separator } from "@/Components/ui/separator"
import { AddChapterForm } from "@/Components/uploads/add-chapter-form"

interface Props {
	bookId: number
}

const AddChapter: FC<Props> = ({ bookId }) => {
	return (
		<div className="space-y-6">
			<Head title="Add book" />
			<div>
				<h2 className="text-2xl font-medium tracking-tight">
					Book {bookId} Chapters
				</h2>
			</div>
			<div>
				<Separator />
			</div>
			<div>
				<AddChapterForm bookId={bookId} />
			</div>
		</div>
	)
}

export default AddChapter
