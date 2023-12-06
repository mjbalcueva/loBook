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
			<div>
				<h1>{chapterData.title}</h1>
			</div>
			<Separator />
			<div>
				<Viewer content={chapterData.content} />
			</div>
		</div>
	)
}

export default Show
