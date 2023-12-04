import { Link } from "@inertiajs/react"
import { FC, HTMLAttributes, ReactNode } from "react"

import { format } from "date-fns"
import { HeartIcon, ListIcon } from "lucide-react"

import { Badge } from "@/Components/ui/badge"
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/Components/ui/hover-card"
import { Book } from "@/types"

interface Props extends HTMLAttributes<HTMLDivElement> {
	book: Book
}

const BookCard: FC<Props> = ({ book }) => {
	return (
		<div className="flex">
			<BookCardHover
				book={book}
				side="right"
			>
				<img
					src={book.cover}
					alt={book.title}
					className="aspect-[3/4] h-40 cursor-pointer select-none bg-accent object-cover lg:h-56"
				/>
			</BookCardHover>
			<div className="flex flex-1 flex-col space-y-1 px-2">
				<BookCardTitle book={book} />
				<BookCardActions book={book} />
				<BookCardContent book={book} />
				<BookCardFooter book={book} />
			</div>
		</div>
	)
}

const BookCardTitle: FC<Props> = ({ book }) => {
	return (
		<div>
			<BookCardHover
				book={book}
				className="line-clamp-1 font-medium underline-offset-2 hover:underline"
			>
				{book.title}
			</BookCardHover>
			<h2 className="line-clamp-1 text-sm font-light text-muted-foreground">
				by {book.author}
			</h2>
		</div>
	)
}

const BookCardActions: FC<Props> = ({ book }) => {
	return (
		<div className="flex gap-4 py-1 text-sm text-muted-foreground">
			<span className="flex items-center">
				<HeartIcon className="mr-1 h-4 w-4" /> {book.chapters.length}
			</span>
			<span className="flex items-center">
				<ListIcon className="mr-1 h-4 w-4" /> {book.chapters.length}
			</span>
		</div>
	)
}

const BookCardContent: FC<Props> = ({ book }) => {
	return (
		<div className="text-sm font-light leading-6 tracking-wide text-muted-foreground">
			<p className="line-clamp-3 sm:line-clamp-5 md:line-clamp-3 lg:line-clamp-6 xl:line-clamp-6 2xl:line-clamp-none">
				{book.description}
			</p>
		</div>
	)
}

const BookCardFooter: FC<Props> = ({ book }) => {
	const tags = book.genres.split(",").map((genre) => genre.trim())
	return (
		<div className="flex flex-wrap gap-x-1 gap-y-1">
			{tags.slice(0, 3).map((tag) => (
				<Badge
					key={tag}
					variant={"secondary"}
					className="select-none text-muted-foreground"
				>
					{tag}
				</Badge>
			))}
			{tags.length > 3 && (
				<Badge
					variant={"outline"}
					className="select-none text-muted-foreground"
				>
					+{tags.length - 3}
				</Badge>
			)}
		</div>
	)
}

const BookCardHover: FC<
	Props & {
		side?: "right" | "top" | "bottom" | "left" | undefined
	}
> = ({ book, side, className, children }) => {
	const date = (date: string) => format(new Date(date), "MMM d, yyyy - hh:mm a")
	const tags = book.genres.split(",").map((genre) => genre.trim())
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Link
					href={route("uploads.edit", [book.id])}
					className={className}
				>
					{children}
				</Link>
			</HoverCardTrigger>

			<HoverCardContent
				side={side}
				className="flex w-80 flex-col gap-0.5"
			>
				<HoverContentItem
					title="title"
					children={book.title}
				/>
				<HoverContentItem
					title="author"
					children={book.author}
				/>
				<HoverContentItem
					title="updated"
					children={date(book.updated_at)}
				/>
				<HoverContentItem
					title="created"
					children={date(book.created_at)}
				/>
				<HoverContentItem title="tags">
					<span className="space-x-0.5 space-y-0.5">
						{tags.map((tag) => (
							<Badge
								key={tag}
								variant={"outline"}
								className="select-none text-muted-foreground"
							>
								{tag}
							</Badge>
						))}
					</span>
				</HoverContentItem>
			</HoverCardContent>
		</HoverCard>
	)
}

const HoverContentItem: FC<{ title: string; children: ReactNode }> = ({
	title,
	children,
}) => {
	return (
		<div className="font-mono text-sm text-muted-foreground">
			<span className="text-sm tracking-wide underline-offset-2 hover:underline">
				{title}
			</span>
			:
			<span className="ml-1 text-sm font-light text-accent-foreground">
				{children}
			</span>
		</div>
	)
}

export { BookCard }
