import { Head, Link } from "@inertiajs/react"

import { Button } from "@/Components/ui/button"
import { Separator } from "@/Components/ui/separator"
import { AddBookForm } from "@/Components/uploads/add-book-form"

const AddBook = () => {
	return (
		<div className="space-y-6">
			<Head title="Add book" />
			<div>
				<h2 className="text-2xl font-medium tracking-tight">Add book</h2>
				<p className="text-sm text-muted-foreground">
					Add a book to your collection.
				</p>
			</div>
			<div>
				<Separator />
			</div>
			<div>
				<AddBookForm />
			</div>
			<Link href="/uploads/book/2/chapter">
				<Button variant={"secondary"}>Chapters</Button>
			</Link>
		</div>
	)
}

export default AddBook
