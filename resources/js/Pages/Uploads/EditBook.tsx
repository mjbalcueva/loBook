import { Head, Link } from "@inertiajs/react"

import { Button } from "@/Components/ui/button"
import { Separator } from "@/Components/ui/separator"
import { EditBookForm } from "@/Components/uploads/edit-book-form"

const EditBook = () => {
	return (
		<div className="space-y-6">
			<Head title="Edit Book" />
			<div>
				<h2 className="text-2xl font-medium tracking-tight">Edit book</h2>
				<p className="text-sm text-muted-foreground">Edit your book.</p>
			</div>
			<div>
				<Separator />
			</div>
			<div>
				<EditBookForm />
			</div>
			<Link href="/uploads/book/2/chapter">
				<Button variant={"secondary"}>Chapters</Button>
			</Link>
		</div>
	)
}

export default EditBook
