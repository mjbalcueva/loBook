import { Head, useForm } from "@inertiajs/react"
import { FormEventHandler } from "react"

import { Form } from "@/Components/form-inertia"
import { Separator } from "@/Components/ui/separator"
import { useToast } from "@/Components/ui/use-toast"

const Import = () => {
	const { toast } = useToast()

	const { data, setData, post, processing } = useForm({
		csv: {} as File,
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
		post(route("import.store"))
	}
	return (
		<>
			<Head title="Browse" />
			<div className="mt-4">
				<h2 className="text-3xl font-bold tracking-tight">Import</h2>
			</div>

			<div className="my-4">
				<Separator />
			</div>

			<Form
				className="space-y-4"
				onSubmit={onSubmit}
			>
				<Form.File
					label="CSV File"
					placeholder="Author"
					onChange={(e) => {
						if (e.target.files && e.target.files.length > 0) {
							setData("csv", e.target.files[0])
						}
					}}
					className="text-muted-foreground file:mr-2 file:rounded-sm file:bg-accent/80 file:text-muted-foreground sm:w-72"
				/>
				<Form.Action processing={processing}>Submit</Form.Action>
			</Form>
		</>
	)
}

export default Import
