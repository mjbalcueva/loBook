import { Head } from "@inertiajs/react"
import { FC, PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
	title: string
}

const AuthLayout: FC<Props> = ({ title, children }) => {
	return (
		<>
			<Head title={title} />
			<div className="flex min-h-screen items-center justify-center">
				<div className="max-w-[500px]">{children}</div>
			</div>
		</>
	)
}

export { AuthLayout }
