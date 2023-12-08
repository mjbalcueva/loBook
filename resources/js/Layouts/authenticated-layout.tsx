import {
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useEffect,
	useRef,
	useState,
} from "react"

import {
	HardDriveUploadIcon,
	ImportIcon,
	LayoutDashboardIcon,
} from "lucide-react"

import { MainNav } from "@/Components/main-nav"
import { Sidebar } from "@/Components/sidebar"
import { RootLayout } from "@/Layouts/root-layout"
import { cn } from "@/Lib/utils"
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
		title: "Import",
		href: "/import",
		icon: <ImportIcon className="h-5 w-5" />,
	},
]
const AuthenticatedLayout = ({ user, children }: Props) => {
	const [books, setBooks] = useState<null | Book[]>(null)
	const [isNavVisible, setIsNavVisible] = useState(true)
	const [prevScrollPos, setPrevScrollPos] = useState(0)
	const scrollDiv = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = scrollDiv.current?.scrollTop || 0
			const isScrollingUp = prevScrollPos > currentScrollPos

			setIsNavVisible(isScrollingUp)
			setPrevScrollPos(currentScrollPos)
		}

		scrollDiv.current?.addEventListener("scroll", handleScroll)
		return () => scrollDiv.current?.removeEventListener("scroll", handleScroll)
	}, [prevScrollPos])

	return (
		<RootLayout className="flex h-screen antialiased">
			<Sidebar navLinks={links} />
			<div
				ref={scrollDiv}
				className="flex-1 overflow-auto"
			>
				<Context.Provider value={{ books, setBooks }}>
					<div
						className={cn(
							"sticky left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out",
							isNavVisible ? "translate-y-0" : "-translate-y-full",
						)}
					>
						<MainNav
							user={user}
							navLinks={links}
							className="border-b bg-background/40 px-2 py-2 backdrop-blur-lg dark:bg-background/80 md:px-0 lg:py-4"
						/>
					</div>

					<div className="overflow-clip">
						<div className="px-2 pb-14 md:container">{children}</div>
					</div>
				</Context.Provider>
			</div>
		</RootLayout>
	)
}

export { AuthenticatedLayout }
