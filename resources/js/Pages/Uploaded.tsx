import { Head } from "@inertiajs/react"

import { PlusCircle } from "lucide-react"

import { Button } from "@/Components/ui/button"

const Uploaded = () => {
	return (
		<>
			<Head title="Uploaded" />
			<div className="my-4 flex items-center justify-between">
				<h2 className="text-3xl font-bold tracking-tight">Add book</h2>
				<div className="flex items-center space-x-2">
					<Button className="text-sm">
						<PlusCircle className="mr-2 h-5 w-5" />
						Upload book
					</Button>
				</div>
			</div>
			<div className="flex min-h-[50vh] items-center justify-center rounded-md border">
				<p className="select-none text-muted-foreground">
					Embark on your reading journey...
				</p>
			</div>
		</>
	)
}

export default Uploaded
