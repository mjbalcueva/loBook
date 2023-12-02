import { useForm } from "@inertiajs/react"
import { FormEventHandler } from "react"

import { Form } from "@/Components/form-inertia"
import { useToast } from "@/Components/ui/use-toast"

const AddForm = () => {
	const { toast } = useToast()

	const { data, setData, post, processing, errors, reset } = useForm({
		cover: "",
		title: "",
		description: "",
		genres: "",
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
		// post(route("uploads.add"))
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

			<Form.Input
				label="Book Title"
				value={data.title}
				onChange={(e) => setData("title", e.target.value)}
				placeholder="Title"
				message={errors.title}
				className="sm:w-72"
			/>

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

			<Form.Action
				processing={processing}
				className=""
			>
				Add book
			</Form.Action>
		</Form>
	)
}

export { AddForm }
