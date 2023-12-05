import { FC } from "react"

import { Book } from "@/types"

interface Props {
	book: Book
}

const Show: FC<Props> = ({ book }) => {
	return (
		<>
			<div className="relative">
				<BackgroundImage
					src={book.cover}
					alt={book.title}
				/>
				<div className="flex space-x-4 border pt-5">
					<img
						src={book.cover}
						alt={book.title}
						className="aspect-[3/4] h-40 cursor-pointer select-none rounded bg-accent object-cover"
					/>
					<h1 className="text-2xl font-extrabold leading-6 tracking-wide drop-shadow-md [text-shadow:_0_2px_1px_rgb(0_0_0_/_20%)]">
						{book.title}
					</h1>
				</div>
			</div>
			<div>Chapters</div>
		</>
	)
}

const BackgroundImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="absolute -z-50 h-72 w-full scale-x-150">
			<img
				src={src}
				alt={alt}
				className="absolute inset-0 h-full w-full bg-accent object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-background/80 from-70% to-background"></div>
		</div>
	)
}

export default Show
