import { FC } from "react"

import {
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
import { Chapters } from "@/Components/uploads/add-book-form"

interface Props {
	chapters: Chapters
	setData: any
}

const ChaptersList: FC<Props> = ({ chapters, setData }) => {
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
							<DropdownMenuItem>
								<FileSignatureIcon className="mr-2 h-4 w-4" /> Edit
							</DropdownMenuItem>
							<DropdownMenuItem
								onClick={() => {
									setData(
										"chapters",
										chapters.filter((c) => c.id !== chapter.id),
									)
								}}
							>
								<TrashIcon className="mr-2 h-4 w-4" /> Delete
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			))}
		</>
	)
}

export { ChaptersList }
