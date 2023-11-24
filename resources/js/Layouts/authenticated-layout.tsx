import { Head } from "@inertiajs/react"
import { PropsWithChildren } from "react"

import { HomeIcon, LayoutDashboardIcon, PlusCircleIcon } from "lucide-react"

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
	const sidebarItems = [
		{
			title: "Home",
			href: "/",
			icon: <HomeIcon className="h-5 w-5" />,
		},
		{
			title: "Add Book",
			href: "/dashboard",
			icon: <PlusCircleIcon className="h-5 w-5" />,
		},
	]

	return (
		<RootLayout className="flex h-screen antialiased">
			<Sidebar>
				{sidebarItems.map((item) => (
					<Sidebar.Item
						title={item.title}
						href={item.href}
						icon={item.icon}
					/>
				))}
			</Sidebar>

			<ScrollArea className="flex-1 overflow-hidden px-5 pt-5">
				<UserNav user={user} />
				<Head title={title} />
				{children}
			</ScrollArea>
		</RootLayout>
	)
}

export { AuthenticatedLayout }
