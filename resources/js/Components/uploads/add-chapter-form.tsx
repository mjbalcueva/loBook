import { router } from "@inertiajs/react"
import { FormEventHandler } from "react"

import { Editor } from "@/Components/editor"
import { Form } from "@/Components/form-inertia"
import { Label } from "@/Components/ui/label"
import { useToast } from "@/Components/ui/use-toast"

const AddChapterForm = () => {
	const { toast } = useToast()

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault()
		toast({
			description: (
				<pre className="w-[340px] rounded-md">
					{/* <code className="text-white">{JSON.stringify(data, null, 2)}</code> */}
				</pre>
			),
		})

		// router.visit(route("uploads.addbook"))
	}

	return (
		<Form
			className="space-y-4"
			onSubmit={onSubmit}
		>
			<Form.Input
				label="Title"
				placeholder="Title"
				// value={data.title}
				// onChange={(e) => setData({ ...data, title: e.target.value })}
			/>

			<div className="space-y-2">
				<Label className="mb-1">Content</Label>
				<div className="rounded-md border p-1">
					<Editor onChange={() => {}} />
				</div>
			</div>

			<Form.Action
				processing={false}
				className="mt-4"
			/>
		</Form>
	)
}

export { AddChapterForm }
