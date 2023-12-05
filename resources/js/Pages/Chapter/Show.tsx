import { FC } from "react"

interface Props {
	chapterData: any
}

const Show: FC<Props> = ({ chapterData }) => {
	return (
		<>
			<pre>
				<code>{JSON.stringify(chapterData, null, 2)}</code>
			</pre>
		</>
	)
}

export default Show
