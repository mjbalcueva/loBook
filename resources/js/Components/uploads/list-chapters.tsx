import { FC, useState } from "react"

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

import { EditChapterSheet } from "./edit-chapter-sheet"

interface Props {
	data: any
	setData: any
}

const ListChapters: FC<Props> = ({ data, setData }) => {
	const [open, setOpen] = useState(false)
	const [targetChapter, setTargetChapter] = useState(0)

	const chapters = data.chapters as Chapters

	if (chapters?.length === 0) return <h2 className="m-4">Create a chapter</h2>

	return (
		<>
			<EditChapterSheet
				data={data}
				setData={setData}
				open={open}
				setOpen={setOpen}
				targetChapter={targetChapter}
			/>

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
							<DropdownMenuItem
								onClick={() => {
									setOpen(true)
									setTargetChapter(chapter.id!)
								}}
							>
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

export { ListChapters }
