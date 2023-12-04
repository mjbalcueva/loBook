import { FC } from "react"

interface Props {
	message: string
}

const EmptyState: FC<Props> = ({ message }) => {
	return (
		<div className="flex min-h-[50vh] items-center justify-center rounded-md border">
			<p className="select-none text-muted-foreground">{message}</p>
		</div>
	)
}

export { EmptyState }
