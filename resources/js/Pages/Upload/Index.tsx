import { Head, Link } from "@inertiajs/react"
import { FC } from "react"

import { PlusCircle } from "lucide-react"

import { EmptyBooks } from "@/Components/empty-books"
import { buttonVariants } from "@/Components/ui/button"
import { cn } from "@/Lib/utils"
import { Book, Paginate } from "@/types"

interface Props {
	bookData: Paginate & {
		data: Book[] | []
	}
}

const Index: FC<Props> = ({ bookData }) => {
	return (
		<>
			<Head title="Uploads" />
			<div className="my-4 flex items-center justify-between">
				<h2 className="text-3xl font-bold tracking-tight">Add book</h2>
				<div className="flex items-center space-x-2">
					<Link
						href={route("uploads.create")}
						className={cn(buttonVariants({ size: "sm" }), "text-sm")}
					>
						<PlusCircle className="mr-2 h-5 w-5" />
						Upload book
					</Link>
				</div>
			</div>
			{bookData.data.length === 0 ? (
				<EmptyBooks message="No books uploaded yet." />
			) : (
				<div className="flex flex-col space-y-2">
					{bookData.data.map((book) => (
						<div
							key={book.id}
							className="border"
						>
							<img
								src={book.cover}
								alt={book.title}
								className="h-60 w-40 rounded-md border object-cover"
							/>
						</div>
					))}
				</div>
			)}
		</>
	)
}

export default Index
