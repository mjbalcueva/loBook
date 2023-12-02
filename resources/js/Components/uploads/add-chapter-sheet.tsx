import { FC } from "react"

interface Props {
	chapters: {
		id?: number
		title: string
		content: string
	}[]
}

const AddChapterSheet: FC<Props> = ({ chapters }) => {
	return <>love</>
}

export { AddChapterSheet }
