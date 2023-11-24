import { Head } from "@inertiajs/react"
import { PropsWithChildren } from "react"

import { HomeIcon, PlusCircleIcon } from "lucide-react"

import { MainNav } from "@/Components/main-nav"
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
	const links = [
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
				{links.map((item) => (
					<Sidebar.Item
						title={item.title}
						href={item.href}
						icon={item.icon}
					/>
				))}
			</Sidebar>
			<div className="flex-1">
				<MainNav user={user}>
					{links.map((item) => (
						<MainNav.Item
							title={item.title}
							href={item.href}
							icon={item.icon}
						/>
					))}
				</MainNav>
				<ScrollArea className="overflow-hidden">
					<Head title={title} />
					{children}
				</ScrollArea>
			</div>
		</RootLayout>
	)
}

export { AuthenticatedLayout }
