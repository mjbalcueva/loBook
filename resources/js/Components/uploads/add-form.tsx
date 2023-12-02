import { useForm } from "@inertiajs/react"
import { FormEventHandler } from "react"

import { Form } from "@/Components/form-inertia"

const AddForm = () => {
	const { data, setData, post, processing, errors, reset } = useForm({
		title: "",
		description: "",
		genres: "",
	})

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault()

		// post(route("uploads.add"))
	}

	return (
		<Form
			onSubmit={onSubmit}
			className="space-y-4"
		>
			<Form.Input
				label="Book Title"
				value={data.title}
				onChange={(e) => setData("title", e.target.value)}
				placeholder="Title"
				message={errors.title}
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
		</Form>
	)
}

export { AddForm }
