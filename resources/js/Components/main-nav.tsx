import { Link, usePage } from "@inertiajs/react"
import { HTMLAttributes, PropsWithChildren, ReactNode } from "react"

import { MenuIcon } from "lucide-react"

import { Logo } from "@/Components/logo"
import { SearchInput } from "@/Components/search-input"
import { Button, buttonVariants } from "@/Components/ui/button"
import { Separator } from "@/Components/ui/separator"
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from "@/Components/ui/sheet"
import { UserNav } from "@/Components/user-nav"
import { cn } from "@/Lib/utils"
import { PageProps, User } from "@/types"

interface Props extends HTMLAttributes<HTMLDivElement> {
	user: User
	navLinks: {
		title: string
		href: string
		icon: ReactNode
	}[]
}

const MainNav = ({ user, navLinks, ...props }: Props) => {
	const appName = usePage<PageProps>().props.appName

	return (
		<div {...props}>
			<div className="flex w-full items-center md:container">
				<div className="flex items-center lg:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant={"ghost"}
								size={"icon"}
								className="hover:bg-accent/80"
							>
								<MenuIcon className="h-5 w-5" />
							</Button>
						</SheetTrigger>
						<SheetContent
							side="left"
							className="flex flex-col"
						>
							<SheetHeader>
								<Link
									href="/"
									className={cn(
										buttonVariants({ variant: "none", size: "icon" }),
										"w-full justify-start pl-0.5 font-bold uppercase tracking-[0.2rem]",
									)}
								>
									<Logo className="mr-3 h-8 w-8" />
									{appName}
								</Link>
							</SheetHeader>
							<Separator className="w-full" />
							<ul className="flex-1 space-y-2">
								{navLinks.map((item) => (
									<MainNav.Item
										key={item.href}
										title={item.title}
										href={item.href}
										icon={item.icon}
									/>
								))}
							</ul>
						</SheetContent>
					</Sheet>
				</div>
				<div className="flex w-full items-end justify-end gap-2">
					<SearchInput navLinks={navLinks} />
					<UserNav user={user} />
				</div>
			</div>
		</div>
	)
}

const MainNavItem = ({
	title,
	href,
	icon,
}: {
	title: string
	href: string
	icon: ReactNode
} & PropsWithChildren) => {
	return (
		<li key={href}>
			<Link
				href={href}
				className={cn(
					buttonVariants({ variant: "ghost", size: "icon" }),
					"flex w-full items-center justify-start py-6",
				)}
			>
				<div className="ml-2 mr-4">{icon}</div>
				<span className="uppercase">{title}</span>
			</Link>
		</li>
	)
}

MainNav.Item = MainNavItem

export { MainNav }
