import { Link } from "@inertiajs/react"
import { FC, useMemo, useState } from "react"

import { ClockIcon, HeartIcon } from "lucide-react"

import { EmptyState } from "@/Components/empty-state"
import { Badge } from "@/Components/ui/badge"
import { Button, buttonVariants } from "@/Components/ui/button"
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/Components/ui/collapsible"
import { Separator } from "@/Components/ui/separator"
import { cn, split } from "@/Lib/utils"
import { Book, Chapter } from "@/types"

interface Props {
	book: Book
}

const Show: FC<Props> = ({ book }) => {
	return (
		<div className="relative">
			<BackgroundImage
				src={book.cover}
				alt={book.title}
			/>
			<div className="relative">
				<BookHeader book={book} />
				<div className="relative">
					<div className="absolute h-full w-full scale-x-150 bg-background/80 backdrop-blur-md" />
					<div className="relative pt-28">
						<p>{book.description}</p>
						<Separator className="my-4" />
						<h3 className="mb-4 text-2xl font-bold">Chapters</h3>
						<ChapterList chapters={book.chapters} />
					</div>
				</div>
			</div>
		</div>
	)
}

const BackgroundImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div>
			<img
				src={src}
				alt={alt}
				className="h-72 w-full scale-150 bg-accent/80 object-cover"
			/>
			<div className="absolute inset-0 scale-150 bg-background/50 backdrop-blur-sm" />
		</div>
	)
}

const BookHeader = ({ book }: { book: Book }) => {
	const tags = split(book.genres)

	return (
		<div className="-mb-20 -mt-64 flex flex-wrap space-x-4 md:-mb-24 md:-mt-60 lg:-mt-56 xl:-mb-24 xl:space-x-8">
			<img
				src={book.cover}
				alt={book.title}
				className="z-10 aspect-[3/4] h-44 rounded border bg-slate-500 object-cover sm:h-52 md:h-60 lg:h-72 xl:h-80"
			/>
			<div className="z-10 flex flex-1 flex-col justify-between">
				<div className="flex-1 md:space-y-2">
					<h1 className="text-2xl font-black leading-7 lg:text-4xl lg:leading-none xl:text-5xl">
						{book.title}
					</h1>
					<h2 className="md:text-lg lg:text-xl">{book.author}</h2>
				</div>
				<div className="flex flex-col gap-y-2">
					<BookActions />
					<BookTags tags={tags} />
				</div>
			</div>
		</div>
	)
}

const BookActions = () => {
	return (
		<div className="flex items-center gap-x-2">
			<Button className="lg:h-11 lg:px-9 lg:text-base xl:h-12 xl:px-10">
				Read First
			</Button>
			<Button
				className={cn("lg:h-11 lg:w-11 xl:h-12 xl:w-12")}
				size={"icon"}
				variant={"secondary"}
			>
				<HeartIcon className="h-4 w-4 lg:h-5 lg:w-5" />
			</Button>
		</div>
	)
}

const BookTags = ({ tags }: { tags: string[] }) => {
	return (
		<div className="flex flex-wrap gap-1">
			{tags.map((tag) => (
				<Badge
					key={tag}
					variant={"secondary"}
					className="select-none bg-accent/60 text-muted-foreground"
				>
					{tag}
				</Badge>
			))}
		</div>
	)
}

const ChapterList = ({ chapters }: { chapters: Book["chapters"] }) => {
	const [isOpen, setIsOpen] = useState(true)
	const [isAscending, setIsAscending] = useState(false)

	const ascendingChapters = useMemo(() => {
		return chapters!.map((chapter, key) => {
			return {
				...chapter,
				key: key + 1,
			}
		})
	}, [chapters])

	const descendingChapters = useMemo(() => {
		return ascendingChapters.slice().reverse()
	}, [ascendingChapters])

	return (
		<Collapsible
			open={isOpen}
			onOpenChange={setIsOpen}
			className="space-y-4"
		>
			<div className="flex items-center justify-between space-x-4">
				<Button
					variant="secondary"
					onClick={() => setIsAscending(!isAscending)}
				>
					{isAscending ? "Ascending" : "Descending"}
				</Button>
				<h4 className="text-sm font-semibold">Ch. 0 - {chapters!.length}</h4>
				<CollapsibleTrigger
					className={buttonVariants({ variant: "secondary" })}
				>
					Collapse
				</CollapsibleTrigger>
			</div>

			<CollapsibleContent>
				{chapters!.length === 0 ? (
					<EmptyState message="No chapters uploaded yet." />
				) : (
					<div className="space-y-1">
						{isAscending
							? ascendingChapters.map((chapter) => (
									<ChapterCard
										key={chapter.id}
										id={chapter.key}
										chapter={chapter}
									/>
							  ))
							: descendingChapters.map((chapter) => (
									<ChapterCard
										key={chapter.id}
										id={chapter.key}
										chapter={chapter}
									/>
							  ))}
					</div>
				)}
			</CollapsibleContent>
		</Collapsible>
	)
}

const ChapterCard = ({ id, chapter }: { id: number; chapter: Chapter }) => {
	const relativeDate = (date: string) => {
		const now = new Date()
		const then = new Date(date)

		const seconds = Math.round((now.getTime() - then.getTime()) / 1000)
		const minutes = Math.round(seconds / 60)
		const hours = Math.round(minutes / 60)
		const days = Math.round(hours / 24)
		const weeks = Math.round(days / 7)
		const months = Math.round(days / 30)
		const years = Math.round(days / 365)

		if (seconds < 60) return `${seconds} seconds ago`
		if (minutes < 60) return `${minutes} minutes ago`
		if (hours < 24) return `${hours} hours ago`
		if (days < 7) return `${days} days ago`
		if (weeks < 4) return `${weeks} weeks ago`
		if (months < 12) return `${months} months ago`
		return `${years} years ago`
	}

	return (
		<Link
			href={route("chapters.show", [chapter.book_id, chapter.id])}
			className="flex w-full items-center justify-between rounded bg-secondary/50 px-4 py-3 text-start text-sm transition-all hover:bg-secondary/80"
			as="button"
		>
			<div className="flex flex-col gap-0.5 py-0.5">
				<div className="flex items-center gap-1.5">
					<span className="w-4">🇬🇧</span>
					<span className="font-bold">Ch. {id}</span>
				</div>
				<div className="flex items-center gap-1.5">
					<span className="w-4"></span>
					<span className="text-muted-foreground">{chapter.title}</span>
				</div>
			</div>
			<div className="flex min-w-fit items-center gap-1.5">
				<ClockIcon className="h-4 w-4" />
				<span className="text-sm">{relativeDate(chapter.created_at)}</span>
			</div>
		</Link>
	)
}

export default Show
