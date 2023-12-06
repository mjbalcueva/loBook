import { FC } from "react"

import { Viewer } from "@/Components/editor"
import { Separator } from "@/Components/ui/separator"
import { Chapter } from "@/types"

interface Props {
	chapterData: Chapter
}

const Show: FC<Props> = ({ chapterData }) => {
	return (
		<div>
			<div className="flex h-32 items-center justify-center">
				<h1 className="text-3xl font-medium tracking-wide">
					{chapterData.title}
				</h1>
			</div>
			<Separator />
			<div className="mt-10">
				<Viewer content={chapterData.content} />
			</div>
		</div>
	)
}

export default Show
