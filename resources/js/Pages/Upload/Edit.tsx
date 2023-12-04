import { Head } from "@inertiajs/react"
import { FC } from "react"

import { Button } from "@/Components/ui/button"
import { Separator } from "@/Components/ui/separator"
import { useToast } from "@/Components/ui/use-toast"
import { AddBookForm } from "@/Components/upload/add-book-form"

interface Props {
	book: any
}

const Edit: FC<Props> = ({ book }) => {
	const { toast } = useToast()
	return (
		<div className="mb-32 space-y-6">
			<Head title="Add book" />
			<div>
				<h2 className="text-2xl font-medium tracking-tight">Edit book</h2>
				<p className="text-sm text-muted-foreground">Edit a book's content</p>
			</div>
			<div>
				<Button
					onClick={() =>
						toast({
							description: (
								<pre>
									<code>{JSON.stringify(book, null, 2)}</code>
								</pre>
							),
						})
					}
				>
					Button
				</Button>
				<Separator />
			</div>
			<div>
				<AddBookForm />
			</div>
		</div>
	)
}

export default Edit
