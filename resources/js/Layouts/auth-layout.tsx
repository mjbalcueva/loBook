import { PropsWithChildren } from "react"

import { Head } from "@inertiajs/react"

interface Props extends PropsWithChildren {
	title: string
}

const AuthLayout: React.FC<Props> = ({ title, children }) => {
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
