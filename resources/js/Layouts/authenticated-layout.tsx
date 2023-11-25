import { Head } from "@inertiajs/react"
import { PropsWithChildren } from "react"

import { HomeIcon, PlusCircleIcon } from "lucide-react"

import { MainNav } from "@/Components/main-nav"
import { Sidebar } from "@/Components/sidebar"
import { ScrollArea } from "@/Components/ui/scroll-area"
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
			<Head title={title} />

			<Sidebar>
				{links.map((item) => (
					<Sidebar.Item
						title={item.title}
						href={item.href}
						icon={item.icon}
					/>
				))}
			</Sidebar>

			<div className="flex flex-1">
				<ScrollArea className="w-full overflow-hidden">
					<MainNav
						user={user}
						className="absolute z-50 w-full bg-background/40 backdrop-blur-lg dark:bg-background/90"
					>
						{links.map((item) => (
							<MainNav.Item
								title={item.title}
								href={item.href}
								icon={item.icon}
							/>
						))}
					</MainNav>
					<div className="mt-14 lg:mt-16">{children}</div>
				</ScrollArea>
			</div>
		</RootLayout>
	)
}

export { AuthenticatedLayout }
