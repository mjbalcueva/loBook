import { useForm } from "@inertiajs/react"
import { FormEventHandler } from "react"

import { Form } from "@/Components/form-inertia"
import { useToast } from "@/Components/ui/use-toast"

const AddBookForm = () => {
	const { toast } = useToast()

	const { data, setData, post, processing, errors, reset } = useForm({
		cover: "",
		title: "",
		author: "",
		description: "",
		genre: "",
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
		<Form
			onSubmit={onSubmit}
			className="space-y-4"
		>
			<Form.Image
				label="Book Cover"
				value={data.cover}
				onChange={(e) => setData("cover", e.target.value)}
				message={errors.cover}
				className="file:rounded-sm file:bg-accent sm:w-72"
			/>

			<div className="flex flex-col gap-8 sm:flex-row">
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
				value={data.genre}
				onChange={(e) => setData("genre", e.target.value)}
				placeholder="genre1, genre2, genre3"
				message={errors.genre}
				className="resize-none"
			/>

			<Form.Action
				processing={processing}
				className=""
			>
				Add book
			</Form.Action>
		</Form>
	)
}

export { AddBookForm }
