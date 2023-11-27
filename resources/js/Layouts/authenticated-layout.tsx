import { PropsWithChildren } from "react"

import { HomeIcon, PlusCircleIcon } from "lucide-react"

import { MainNav } from "@/Components/main-nav"
import { Sidebar } from "@/Components/sidebar"
import { ScrollArea } from "@/Components/ui/scroll-area"
import { RootLayout } from "@/Layouts/root-layout"
import { User } from "@/types"

interface Props extends PropsWithChildren {
	user: User
}

const AuthenticatedLayout = ({ user, children }: Props) => {
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
						key={item.href}
						title={item.title}
						href={item.href}
						icon={item.icon}
					/>
				))}
			</Sidebar>

			<div className="flex-1 overflow-auto">
				<MainNav
					user={user}
					className="sticky top-0 z-50 w-full bg-background/40 backdrop-blur-lg dark:bg-background/90"
				>
					{links.map((item) => (
						<MainNav.Item
							key={item.href}
							title={item.title}
							href={item.href}
							icon={item.icon}
						/>
					))}
				</MainNav>

				<div className="px-2 md:container">{children}</div>
			</div>
		</RootLayout>
	)
}

export { AuthenticatedLayout }
