import { useForm } from "@inertiajs/react"
import { FC, FormEventHandler, useState } from "react"

import { Form } from "@/Components/form-inertia"
import { Button } from "@/Components/ui/button"
import { Label } from "@/Components/ui/label"
import { ListChapters } from "@/Components/upload/list-chapters"
import { Book } from "@/types"

export type Chapters = {
	id: number
	title: string
	content: any
}[]

interface Props {
	book: Book
}

const EditBookForm: FC<Props> = ({ book }) => {
	console.log(book.cover)

	const { data, setData, patch, processing, errors } = useForm({
		title: book.title.length > 0 ? book.title : "",
		author: book.author.length > 0 ? book.author : "",
		cover: {} as File,
		description: book.description.length > 0 ? book.description : "",
		genres: book.genres.length > 0 ? book.genres : "",
		chapters: book.chapters
			? book.chapters.length > 0
				? book.chapters
				: ([] as Chapters)
			: ([] as Chapters),
	})

	const [chapterCount, setChapterCount] = useState(0)

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault()
		patch(route("uploads.update", book.id))
	}

	return (
		<>
			<Form
				onSubmit={onSubmit}
				className="space-y-4"
			>
				{book.cover && (
					<img
						src={book.cover}
						alt="Cover"
						className="m-auto aspect-[3/4] h-60 rounded bg-accent/80 object-cover sm:m-0 sm:h-64 lg:h-72"
					/>
				)}
				<div className="flex flex-col flex-wrap gap-8 sm:flex-row">
					<Form.Input
						label="Book Title"
						value={data.title}
						onChange={(e) => setData("title", e.target.value)}
						placeholder="Title"
						message={errors.title}
						className="sm:w-72"
					/>

					<Form.Input
						label="Book Author"
						value={data.author}
						onChange={(e) => setData("author", e.target.value)}
						placeholder="Author"
						message={errors.author}
						className="sm:w-72"
					/>

					<Form.File
						label="Book Cover"
						onChange={(e) => {
							if (e.target.files && e.target.files.length > 0) {
								setData("cover", e.target.files[0])
							}
						}}
						message={errors.cover}
						className="text-muted-foreground file:mr-2 file:rounded-sm file:bg-accent/80 file:text-muted-foreground sm:w-72"
					/>
				</div>

				<Form.Textarea
					label="Book Description"
					value={data.description}
					onChange={(e) => setData("description", e.target.value)}
					placeholder="Description"
					message={errors.description}
					className="min-h-[140px] resize-none"
				/>

				<Form.Textarea
					label="Genres"
					value={data.genres}
					onChange={(e) => setData("genres", e.target.value)}
					placeholder="genre1, genre2, genre3"
					message={errors.genres}
					className="resize-none"
				/>

				<div className="space-y-2">
					<div className="mt-6 flex items-end justify-between">
						<Label className="mb-1">Chapters</Label>
						<Button
							className="h-8 px-2 text-sm font-normal text-muted-foreground"
							variant={"secondary"}
							type="button"
							onClick={() => {
								setData("chapters", [
									...data.chapters,
									{
										id: chapterCount + 1,
										title: `Chapter ${chapterCount + 1}`,
										content: "",
									},
								])
								setChapterCount(chapterCount + 1)
							}}
						>
							Add chapter
						</Button>
					</div>
					<div className="rounded-md border p-1 text-sm text-muted-foreground">
						<div className="flex flex-col-reverse">
							<ListChapters
								data={data}
								setData={setData}
							/>
						</div>
					</div>
				</div>

				<Form.Action
					processing={processing}
					className=""
				>
					Create book
				</Form.Action>
			</Form>
		</>
	)
}

export { EditBookForm }
