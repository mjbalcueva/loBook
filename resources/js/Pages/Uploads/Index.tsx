import { Head, Link } from "@inertiajs/react"
import { FC } from "react"

import { PlusCircle } from "lucide-react"

import { EmptyBooks } from "@/Components/empty-books"
import { Button, buttonVariants } from "@/Components/ui/button"
import { useToast } from "@/Components/ui/use-toast"
import { cn } from "@/Lib/utils"

interface Props {
	books: any[]
}

const Index: FC<Props> = ({ books }) => {
	const { toast } = useToast()

	return (
		<>
			<Head title="Uploads" />
			<div className="my-4 flex items-center justify-between">
				<h2 className="text-3xl font-bold tracking-tight">Add book</h2>
				<div className="flex items-center space-x-2">
					<Link
						href={route("uploads.addbook")}
						className={cn(buttonVariants({ size: "sm" }), "text-sm")}
					>
						<PlusCircle className="mr-2 h-5 w-5" />
						Upload book
					</Link>
					<Button
						onClick={() => {
							toast({
								description: (
									<pre className="w-[340px] rounded-md">
										<code className="text-white">
											{JSON.stringify(books, null, 2)}
										</code>
									</pre>
								),
							})
							console.log(books)
						}}
					>
						Book
					</Button>
				</div>
			</div>
			<EmptyBooks message="No books uploaded yet." />
		</>
	)
}

export default Index
