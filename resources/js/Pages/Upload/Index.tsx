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
			{bookData.data.length === 0 ? (
				<EmptyBooks message="No books uploaded yet." />
			) : (
				<div className="grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
					{bookData.data.map((book) => (
						<div
							key={book.id}
							className="flex"
						>
							<div className="overflow-hidden rounded-md">
								<img
									src={book.cover}
									alt={book.title}
									className="aspect-[3/4] w-36 object-cover transition-all hover:scale-125 sm:w-40"
								/>
							</div>
							<div className="flex-1 space-y-2 px-4 py-2">
								<h3 className="line-clamp-1 font-medium leading-none">
									{book.title}
								</h3>
								<p className="line-clamp-2 text-sm text-muted-foreground">
									{book.description}
								</p>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	)
}

export default Index
