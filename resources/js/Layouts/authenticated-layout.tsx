import { Head } from "@inertiajs/react"
import { PropsWithChildren } from "react"

import { ModeToggle } from "@/Components/mode-toggle"
import { UserNav } from "@/Components/user-nav"
import { RootLayout } from "@/Layouts/root-layout"
import { User } from "@/types"

interface Props extends PropsWithChildren {
	user: User
	title: string
}

const AuthenticatedLayout = ({ user, title, children }: Props) => {
	return (
		<RootLayout>
			<ModeToggle />
			<UserNav user={user} />
			<Head title={title} />
			{children}
		</RootLayout>
	)
}

export { AuthenticatedLayout }
