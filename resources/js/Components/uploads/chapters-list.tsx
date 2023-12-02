import { Link } from "@inertiajs/react"
import { FC } from "react"

import {
	BookOpenTextIcon,
	FileSignatureIcon,
	MoreHorizontalIcon,
	ScrollTextIcon,
	TrashIcon,
} from "lucide-react"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"

interface Props {
	chapters: {
		id?: number
		title: string
		content: string
	}[]
}

const ChaptersList: FC<Props> = ({ chapters }) => {
	if (chapters?.length === 0) return <h2 className="m-4">Create a chapter</h2>

	return (
		<>
			{chapters.map((chapter) => (
				<div
					key={chapter.id}
					className="flex h-10 cursor-pointer items-center rounded-sm px-2 py-3 hover:bg-accent/50 hover:text-accent-foreground"
				>
					<ScrollTextIcon className="mr-2 h-4 w-4" />
					<span>{chapter.title}</span>
					<DropdownMenu>
						<DropdownMenuTrigger className="ml-auto flex h-8 w-8 items-center justify-center rounded-sm hover:bg-accent">
							<MoreHorizontalIcon className="h-4 w-4" />
						</DropdownMenuTrigger>
						<DropdownMenuContent
							side="bottom"
							align="end"
							className="text-muted-foreground"
						>
							<Link href={`/uploads/book/chapter/${chapter.id}`}>
								<DropdownMenuItem>
									<BookOpenTextIcon className="mr-2 h-4 w-4" /> Read
								</DropdownMenuItem>
							</Link>
							<Link href={`/uploads/book/chapter/${chapter.id}`}>
								<DropdownMenuItem>
									<FileSignatureIcon className="mr-2 h-4 w-4" /> Edit
								</DropdownMenuItem>
							</Link>
							<Link href={`/uploads/book/chapter/${chapter.id}/delete`}>
								<DropdownMenuItem>
									<TrashIcon className="mr-2 h-4 w-4" /> Delete
								</DropdownMenuItem>
							</Link>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			))}
		</>
	)
}

export { ChaptersList }
