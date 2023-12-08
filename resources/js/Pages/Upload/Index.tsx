import { Head, Link } from "@inertiajs/react"
import { FC } from "react"

import { PlusCircle } from "lucide-react"

import { BookList } from "@/Components/books/book-list"
import { buttonVariants } from "@/Components/ui/button"
import { cn } from "@/Lib/utils"
import { Book, Page } from "@/types"

interface Props {
	bookData: Page & {
		data: Book[] | []
	}
}

const Index: FC<Props> = ({ bookData }) => {
	return (
		<>
			<Head title="Uploads" />
			<div className="my-4 flex items-center justify-between">
				<h2 className="text-3xl font-bold tracking-tight">Uploaded Books</h2>
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

			<BookList
				bookData={bookData}
				type="upload"
			/>
		</>
	)
}

export default Index
