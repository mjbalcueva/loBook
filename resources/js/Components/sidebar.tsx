import { Link } from "@inertiajs/react"
import { useState } from "react"

import {
	ChevronFirstIcon,
	ChevronLastIcon,
	HomeIcon,
	LayoutDashboardIcon,
	PersonStanding,
} from "lucide-react"

import { ModeToggle } from "@/Components/mode-toggle"
import { Button } from "@/Components/ui/button"
import { cn } from "@/Lib/utils"

const Sidebar = () => {
	const [expanded, setExpanded] = useState(true)

	return (
		<aside className="h-screen border-r">
			<nav
				className={cn(
					"flex h-full flex-col bg-background shadow-sm transition-all duration-300",
					expanded ? "w-52" : "w-20",
				)}
			>
				<div className="flex items-center justify-between ">
					<span>rawr</span>
					<Button
						variant={"outline"}
						size={"icon"}
						onClick={() => setExpanded(!expanded)}
					>
						{expanded ? <ChevronFirstIcon /> : <ChevronLastIcon />}
					</Button>
				</div>

				<div className="flex flex-1 flex-col px-2">
					<Button
						variant={"ghost"}
						className="w-full"
					>
						<Link href="/">
							<HomeIcon />
						</Link>
					</Button>
					<Button
						variant={"ghost"}
						className="w-full"
					>
						<Link href="/dashboard">
							<LayoutDashboardIcon />
						</Link>
					</Button>
					<Button
						variant={"ghost"}
						className="w-full"
					>
						<Link href="/profile">
							<PersonStanding />
						</Link>
					</Button>
				</div>

				<div className="place-self-end">
					<ModeToggle />
				</div>
			</nav>
		</aside>
	)
}

export { Sidebar }
