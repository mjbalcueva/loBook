import { Head } from "@inertiajs/react"
import { PropsWithChildren } from "react"

import { Sidebar } from "@/Components/sidebar"
import { ScrollArea } from "@/Components/ui/scroll-area"
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
			<div className="flex">
				<Sidebar />
				<ScrollArea className="h-screen flex-1 overflow-hidden">
					<div className="p-4">
						<UserNav user={user} />
						<Head title={title} />
						{children}
					</div>
				</ScrollArea>
			</div>
		</RootLayout>
	)
}

export { AuthenticatedLayout }
