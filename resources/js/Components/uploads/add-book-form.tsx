import { useForm } from "@inertiajs/react"
import { FormEventHandler, useState } from "react"

import { Form } from "@/Components/form-inertia"
import { Button } from "@/Components/ui/button"
import { Label } from "@/Components/ui/label"
import { useToast } from "@/Components/ui/use-toast"
import { ListChapters } from "@/Components/uploads/list-chapters"

export type Chapters = {
	id: number
	title: string
	content: any
}[]

const AddBookForm = () => {
	const { toast } = useToast()
	const { data, setData, post, processing, errors, reset } = useForm({
		cover: "",
		title: "",
		author: "",
		description: "",
		genres: "",
		chapters: [
			{
				content: "a",
			},
			{
				content: "s",
			},
			{
				content: "d",
			},
		],
	})

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault()

		toast({
			description: (
				<pre className="w-[340px] rounded-md">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
					
				</pre>
			),
		})
		post(route("books.store"))
	}

	return (
		<>
			<Form
				onSubmit={onSubmit}
				className="space-y-4"
			>
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

					<Form.Image
						label="Book Cover"
						value={data.cover}
						onChange={(e) => setData("cover", e.target.value)}
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
				<Label>Chapters</Label>
				<div className="rounded-md border px-3 py-2 text-sm text-muted-foreground">
					<div>
						<Button
							variant={"secondary"}
							className="w-full"
						>
							Add chapter
						</Button>
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

export { AddBookForm }
