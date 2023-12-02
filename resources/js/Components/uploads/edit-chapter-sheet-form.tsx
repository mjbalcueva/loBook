import { FC, FormEventHandler } from "react"

import { Editor } from "@/Components/editor"
import { Form } from "@/Components/form-inertia"
import { Label } from "@/Components/ui/label"
import { Chapters } from "@/Components/uploads/add-book-form"

import { useToast } from "../ui/use-toast"

interface Props {
	data: any
	setData: any
	targetChapter: number
}

const EditChapterSheetForm: FC<Props> = ({ data, setData, targetChapter }) => {
	const { toast } = useToast()

	const chapters = data.chapters as Chapters
	targetChapter = targetChapter - 1

	const onSave: FormEventHandler = () => {
		toast({
			description: (
				<pre className="w-[340px] rounded-md">
					<code className="text-white">
						{JSON.stringify(chapters[targetChapter], null, 2)}
					</code>
				</pre>
			),
		})
	}

	return (
		<Form className="space-y-4">
			<Form.Input
				label="Chapter Title"
				placeholder="Title"
				className="sm:w-72"
				value={chapters[targetChapter].title}
				onChange={(e) => {
					setData(
						"chapters",
						chapters.map((chapter, index) =>
							index === targetChapter
								? { ...chapter, title: e.target.value }
								: chapter,
						),
					)
				}}
			/>

			<div className="space-y-2">
				<Label className="mb-1">Content</Label>
				<div className="rounded-md border p-1">
					<Editor
						onChange={(content) => {
							setData(
								"chapters",
								chapters.map((chapter, index) =>
									index === targetChapter ? { ...chapter, content } : chapter,
								),
							)
						}}
						initialContent={chapters[targetChapter].content}
					/>
				</div>
			</div>

			<Form.Action
				processing={false}
				className="mt-4"
				type="button"
				onClick={onSave}
			>
				Save
			</Form.Action>
		</Form>
	)
}

export { EditChapterSheetForm }
