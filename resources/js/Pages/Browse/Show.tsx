import { FC, useMemo } from "react"

import { HeartIcon } from "lucide-react"

import { EmptyState } from "@/Components/empty-state"
import { Badge } from "@/Components/ui/badge"
import { Button } from "@/Components/ui/button"
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
	const tags = useMemo(
		() => book.genres.split(",").map((genre) => genre.trim()),
		[book.genres],
	)

	return (
		<div className="-mb-12 -mt-64 flex space-x-4 sm:-mb-16 md:-mb-20 md:-mt-60 xl:-mb-24 xl:-mt-56 xl:space-x-8">
			<img
				src={book.cover}
				alt={book.title}
				className="z-10 aspect-[3/4] h-44 rounded border bg-slate-500 object-cover sm:h-52 md:h-60 lg:h-72 xl:h-80"
			/>
			<div className="z-10 flex flex-1 flex-col justify-between">
				<div className="flex-1 space-y-2">
					<h1 className="text-2xl font-black leading-7 lg:text-4xl lg:leading-none xl:text-5xl">
						{book.title}
					</h1>
					<h2 className="text-sm sm:text-base md:text-lg lg:text-xl">
						{book.author}
					</h2>
				</div>
				<div className="flex flex-col gap-y-2">
					<BookActions book={book} />
					<BookTags tags={tags} />
				</div>
			</div>
		</div>
	)
}

const BookActions = ({ book }: { book: Book }) => {
	return (
		<div className="flex items-center gap-x-2">
			<Button className="h-12 px-10 text-lg">Read First</Button>
			<Button
				className="h-12 w-12"
				variant={"secondary"}
			>
				<HeartIcon className="h-16 w-16" />
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
	return (
		<>
			{chapters!.length === 0 ? (
				<EmptyState message="No chapters uploaded yet." />
			) : (
				<div className="">
					{chapters!.map((chapter) => (
						<ChapterCard
							key={chapter.id}
							chapter={chapter}
						/>
					))}
				</div>
			)}
		</>
	)
}

const ChapterCard = ({ chapter }: { chapter: Chapter }) => {
	return <div className="">{chapter.title}</div>
}

export default Show
