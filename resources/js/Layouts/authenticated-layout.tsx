import { Head } from "@inertiajs/react"
import { FC, PropsWithChildren } from "react"

import { UserNav } from "@/Components/user-nav"
import { User } from "@/types"

interface Props extends PropsWithChildren {
	user: User
	title: string
}

const AuthenticatedLayout: FC<Props> = ({ user, title, children }) => {
	return (
		<>
			<UserNav user={user} />
			<Head title={title} />
			{children}
		</>
	)
}

export { AuthenticatedLayout }
