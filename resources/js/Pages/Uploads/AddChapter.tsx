import { Head } from "@inertiajs/react"

import { Separator } from "@/Components/ui/separator"
import { AddChapterForm } from "@/Components/uploads/add-chapter-form"

const AddChapter = () => {
	return (
		<div className="mb-32 space-y-6">
			<Head title="Add book" />
			<div>
				<h2 className="text-2xl font-medium tracking-tight">Create chapter</h2>
				<p className="text-sm text-muted-foreground">
					Create a chapter for your book.
				</p>
			</div>
			<div>
				<Separator />
			</div>
			<div>
				<AddChapterForm />
			</div>
		</div>
	)
}

export default AddChapter
