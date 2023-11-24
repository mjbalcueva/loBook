import { Link } from "@inertiajs/react"
import {
	HTMLAttributes,
	PropsWithChildren,
	ReactNode,
	createContext,
	useContext,
	useState,
} from "react"

import { ChevronLeftIcon } from "lucide-react"

import { ModeToggle } from "@/Components/mode-toggle"
import { Button, buttonVariants } from "@/Components/ui/button"
import { cn } from "@/Lib/utils"

import { Separator } from "./ui/separator"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip"

const SidebarContext = createContext({})

const Sidebar = ({ children }: HTMLAttributes<HTMLDivElement>) => {
	const [expanded, setExpanded] = useState(true)

	return (
		<aside
			className={cn(
				"relative hidden h-full border-r px-2 pb-2 pt-4 transition-all duration-300 lg:block",
				expanded ? "w-52" : "w-14",
			)}
		>
			<button
				className="absolute -right-2.5 z-50 rounded-full bg-background"
				onClick={() => setExpanded(!expanded)}
				aria-hidden
			>
				<div className="rounded-full bg-secondary/80 p-0.5 text-accent-foreground/80 transition-transform duration-150 hover:bg-secondary">
					<ChevronLeftIcon
						className={cn(
							"h-4 w-4 transition-transform delay-300 duration-300",
							expanded && "-rotate-180 transform",
						)}
					/>
				</div>
			</button>

			<nav className="flex h-full flex-col space-y-2">
				<Button variant={"link"}>Logo</Button>

				<Separator className="w-full" />

				<SidebarContext.Provider value={expanded}>
					<ul className="mt-2 flex-1 space-y-0.5">{children}</ul>
				</SidebarContext.Provider>

				<Separator className="w-full" />

				<div className="transition-all">
					<ModeToggle />
				</div>
			</nav>
		</aside>
	)
}

const SidebarItem = ({
	title,
	href,
	icon,
}: {
	title: string
	href: string
	icon: ReactNode
} & PropsWithChildren) => {
	const expanded = useContext(SidebarContext)

	return (
		<li key={href}>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							href={href}
							className={cn(
								buttonVariants({ variant: "ghost", size: "icon" }),
								"flex w-full items-center justify-start transition-all duration-300",
								expanded ? "space-x-4 px-2" : "space-x-0 px-0",
							)}
						>
							<div
								className={cn(
									"mx-0 transition-all duration-300",
									!expanded && "mx-2",
								)}
							>
								{icon}
							</div>
							<span className={cn("transition-all", !expanded && "hidden")}>
								{title}
							</span>
						</Link>
					</TooltipTrigger>
					<TooltipContent
						side="right"
						sideOffset={5}
					>
						<p>{title}</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</li>
	)
}

Sidebar.Item = SidebarItem

export { Sidebar }
