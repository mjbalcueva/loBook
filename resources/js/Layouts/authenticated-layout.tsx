import {
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useState,
} from "react"

import { HardDriveUploadIcon, LayoutDashboardIcon } from "lucide-react"

import { MainNav } from "@/Components/main-nav"
import { Sidebar } from "@/Components/sidebar"
import { RootLayout } from "@/Layouts/root-layout"
import { Book, User } from "@/types"

interface Props extends PropsWithChildren {
	user: User
}

interface ContextProps {
	books: null | Book[]
	setBooks: Dispatch<SetStateAction<null | Book[]>>
}

export const Context = createContext<ContextProps>({
	books: null,
	setBooks: () => {},
})

const AuthenticatedLayout = ({ user, children }: Props) => {
	const [books, setBooks] = useState<null | Book[]>(null)

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
	]

	return (
		<RootLayout className="flex h-screen antialiased">
			<Sidebar navLinks={links} />
			<div className="flex-1 overflow-auto">
				<Context.Provider value={{ books, setBooks }}>
					<MainNav
						user={user}
						navLinks={links}
						className="sticky top-0 z-50 w-full bg-background/40 backdrop-blur-lg dark:bg-background/80"
					/>

					<div className="px-2 pb-14 md:container">{children}</div>
				</Context.Provider>
			</div>
		</RootLayout>
	)
}

export { AuthenticatedLayout }
