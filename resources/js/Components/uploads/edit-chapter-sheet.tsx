import { FC } from "react"

import { Separator } from "@radix-ui/react-separator"

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
} from "@/Components/ui/sheet"

import { EditChapterSheetForm } from "./edit-chapter-sheet-form"

interface Props {
	data: any
	setData: any
	open: boolean
	setOpen: (value: boolean) => void
	targetChapter: number
}

const EditChapterSheet: FC<Props> = ({
	data,
	setData,
	open,
	setOpen,
	targetChapter,
}) => {
	return (
		<Sheet
			open={open}
			onOpenChange={(open) => setOpen(open)}
		>
			<SheetContent
				side={"right"}
				className="sm:max-w-[75vw]"
			>
				<SheetTitle>Create a chapter</SheetTitle>
				<SheetDescription>Create a chapter for your book.</SheetDescription>
				<Separator className="my-4" />
				<EditChapterSheetForm
					data={data}
					setData={setData}
					targetChapter={targetChapter}
				/>
			</SheetContent>
		</Sheet>
	)
}

export { EditChapterSheet }
