import { PropsWithChildren } from "react"

import {
	HardDriveUploadIcon,
	HeartIcon,
	LayoutDashboardIcon,
} from "lucide-react"

import { MainNav } from "@/Components/main-nav"
import { Sidebar } from "@/Components/sidebar"
import { RootLayout } from "@/Layouts/root-layout"
import { User } from "@/types"

interface Props extends PropsWithChildren {
	user: User
}

const AuthenticatedLayout = ({ user, children }: Props) => {
	const links = [
		{
			title: "Browse",
			href: "/",
			icon: <LayoutDashboardIcon className="h-5 w-5" />,
		},
		{
			title: "Uploads",
			href: "/uploads",
			icon: <HardDriveUploadIcon className="h-5 w-5" />,
		},
		{
			title: "Favorites",
			href: "/favorites",
			icon: <HeartIcon className="h-5 w-5" />,
		},
	]

	return (
		<RootLayout className="flex h-screen antialiased">
			<Sidebar navLinks={links} />
			<div className="flex-1 overflow-auto">
				<MainNav
					user={user}
					navLinks={links}
					className="sticky top-0 z-50 w-full bg-background/40 backdrop-blur-lg dark:bg-background/80"
				/>

				<div className="px-2 md:container">{children}</div>
			</div>
		</RootLayout>
	)
}

export { AuthenticatedLayout }
