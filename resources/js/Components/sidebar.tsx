import { Link, usePage } from "@inertiajs/react"
import {
	HTMLAttributes,
	PropsWithChildren,
	ReactNode,
	createContext,
	useContext,
	useState,
} from "react"

import { Logo } from "@/Components/logo"
import { SidebarToggle } from "@/Components/sidebar-toggle"
import { Button, buttonVariants } from "@/Components/ui/button"
import { Separator } from "@/Components/ui/separator"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/Components/ui/tooltip"
import { cn } from "@/Lib/utils"
import { PageProps } from "@/types"

const SidebarContext = createContext({})

interface Props extends HTMLAttributes<HTMLDivElement> {
	navLinks: {
		title: string
		href: string
		icon: ReactNode
	}[]
}

const Sidebar = ({ navLinks }: Props) => {
	const appName = usePage<PageProps>().props.appName
	const [expanded, setExpanded] = useState(true)

	return (
		<aside
			className={cn(
				"relative hidden h-full flex-col space-y-2 border-r px-2 pb-2 pt-4 transition-all lg:flex",
				expanded ? "w-52" : "w-14",
			)}
		>
			<Button
				variant={"none"}
				size={"icon"}
				className="w-full justify-start pl-0.5 font-bold uppercase tracking-[0.2rem]"
			>
				<Logo className="mr-3 h-8 w-8" />
				<span className={cn("transition", !expanded && "hidden")}>
					{appName}
				</span>
			</Button>

			<Separator className="w-full" />

			<SidebarContext.Provider value={expanded}>
				<ul className="mt-2 flex-1 space-y-0.5">
					{navLinks.map((item) => (
						<Sidebar.Item
							key={item.href}
							title={item.title}
							href={item.href}
							icon={item.icon}
						/>
					))}
				</ul>
			</SidebarContext.Provider>

			<Separator className="w-full" />

			<SidebarToggle
				onClick={() => setExpanded(!expanded)}
				expanded={expanded}
			/>
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
			<Sidebar.Tooltip content={<p>{title}</p>}>
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
							"mx-0 pl-[1.5px] transition-all duration-300",
							!expanded && "mx-2",
						)}
					>
						{icon}
					</div>
					<span className={cn("transition", !expanded && "hidden")}>
						{title}
					</span>
				</Link>
			</Sidebar.Tooltip>
		</li>
	)
}

const SidebarTooltip = ({
	children,
	content,
}: {
	children: ReactNode
	content: ReactNode
}) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent
					side="right"
					sideOffset={5}
				>
					{content}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

Sidebar.Item = SidebarItem
Sidebar.Tooltip = SidebarTooltip

export { Sidebar }
