import { useForm } from "@inertiajs/react"
import { FC, FormEventHandler } from "react"

import { Editor } from "@/Components/editor"
import { Form } from "@/Components/form-inertia"
import { useToast } from "@/Components/ui/use-toast"

interface Props {
	bookId: number
}

const AddChapterForm: FC<Props> = ({ bookId }) => {
	const { toast } = useToast()

	const { data, setData, post, processing, errors, reset } = useForm({
		content: "",
	})

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault()

		console.log(data)

		toast({
			description: (
				<pre className="w-[340px] rounded-md">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		})
	}

	return (
		<Form
			onSubmit={onSubmit}
			className="space-y-4"
		>
			<Editor onChange={(e) => setData("content", e)} />

			<Form.Action processing={processing}>Add book</Form.Action>
		</Form>
	)
}

export { AddChapterForm }
