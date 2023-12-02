import { FC, FormEventHandler } from "react"

import { Editor } from "@/Components/editor"
import { Form } from "@/Components/form-inertia"
import { Label } from "@/Components/ui/label"
import { Chapters } from "@/Components/uploads/add-book-form"

import { useToast } from "../ui/use-toast"

interface Props {
	data: {
		data: any
		setData: any
		chapterCount: number
	}
}

const AddChapterForm: FC<Props> = ({ data }) => {
	const { toast } = useToast()

	const chapters = data.data.chapters as Chapters
	const latestChapter = chapters.length - 1

	const onSave: FormEventHandler = (e) => {
		toast({
			description: (
				<pre className="w-[340px] rounded-md">
					<code className="text-white">
						{JSON.stringify(chapters[latestChapter], null, 2)}
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
				value={chapters[latestChapter].title}
				onChange={(e) => {
					data.setData("chapters", [
						...chapters.slice(0, latestChapter),
						{
							...chapters[latestChapter],
							title: e.target.value,
						},
					])
				}}
			/>

			<div className="space-y-2">
				<Label className="mb-1">Content</Label>
				<div className="rounded-md border p-1">
					<Editor
						onChange={(content) => {
							data.setData("chapters", [
								...chapters.slice(0, latestChapter),
								{
									...chapters[latestChapter],
									content,
								},
							])
						}}
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

export { AddChapterForm }
