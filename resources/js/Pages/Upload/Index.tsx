import { Head, Link } from "@inertiajs/react"
import { FC, ReactNode } from "react"

import { format } from "date-fns"
import { PlusCircle, ScrollTextIcon } from "lucide-react"

import { EmptyBooks } from "@/Components/empty-books"
import { buttonVariants } from "@/Components/ui/button"
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/Components/ui/hover-card"
import { Separator } from "@/Components/ui/separator"
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
				<div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
					{bookData.data.map((book) => (
						<MiniCardTrigger
							book={book}
							key={book.id}
						>
							<div className="overflow-hidden rounded-l-sm">
								<img
									src={book.cover}
									alt={book.title}
									className="aspect-[3/4] w-36 cursor-pointer select-none object-cover transition-all hover:scale-125"
								/>
							</div>
							<div className="flex-1 space-y-2">
								<h2 className="rounded-tr-sm border-b bg-accent/80 px-2 pb-1 pt-2">
									<span className="line-clamp-1 text-sm font-bold leading-none tracking-wide">
										{book.title}
									</span>
									<span className="mt-1 line-clamp-1 text-sm text-muted-foreground">
										{book.author}
									</span>
								</h2>
								<div className="flex flex-col space-y-1 px-2 text-sm tracking-wide">
									{book.chapters
										.reverse()
										.slice(0, 5)
										.map((chapter) => (
											<Link
												key={chapter.id}
												href={route("chapters.edit", [book.id, chapter.id])}
												className="flex items-center text-muted-foreground hover:text-foreground"
											>
												<ScrollTextIcon className="ml-2 mr-1 h-4 w-4" />
												<span className="line-clamp-1 flex-1">
													{chapter.title}
												</span>
											</Link>
										))}
								</div>
							</div>
						</MiniCardTrigger>
					))}
				</div>
			)}
		</>
	)
}

const MiniCardTrigger: FC<{ book: Book; children: ReactNode }> = ({
	book,
	children,
}) => {
	const formatDate = (date: string) =>
		format(new Date(date), "MMM d, yyyy - HH:mm")
	return (
		<HoverCard
			openDelay={1000}
			closeDelay={0}
		>
			<HoverCardTrigger className="flex rounded-md border">
				{children}
			</HoverCardTrigger>
			<HoverCardContent
				className="w-80 space-y-2 text-sm font-light shadow"
				sideOffset={0}
				side="right"
			>
				<h1 className="text-base font-medium leading-5 tracking-wide">
					{book.title}
				</h1>
				<div className="flex space-x-2 tracking-wide">
					<img
						src={book.cover}
						alt={book.title}
						className="aspect-[3/4] w-24 select-none rounded-sm object-cover"
					/>
					<div className="space-y-0.5 pt-1">
						<div>
							<span className="mr-1 text-sm font-medium text-muted-foreground">
								Author:
							</span>
							{book.author}
						</div>
						<div>
							<span className="mr-1 text-sm font-medium text-muted-foreground">
								Genres:
							</span>
							{book.genres}
						</div>
						<div>
							<span className="mr-1 text-sm font-medium text-muted-foreground">
								Updated:
							</span>
							{formatDate(book.updated_at)}
						</div>
					</div>
				</div>
				<Separator />
				<p className="tracking-wide">
					<span className="mr-1 text-sm font-medium text-muted-foreground">
						Description:
					</span>
					{book.description}
				</p>
			</HoverCardContent>
		</HoverCard>
	)
}

export default Index
