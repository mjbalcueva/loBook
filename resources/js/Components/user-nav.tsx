import { Link } from "@inertiajs/react"
import { FC } from "react"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { LogOutIcon, UserIcon } from "lucide-react"

import { useTheme } from "@/Components/providers/theme-provider"
import { Avatar, AvatarFallback } from "@/Components/ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import { User } from "@/types"

interface Props {
	user: User
}

const UserNav: FC<Props> = ({ user }) => {
	const { setTheme } = useTheme()

	const initials = user.name
		.split(" ")
		.map((n) => n[0])
		.join("")
		.slice(0, 2)
		.toUpperCase()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className="h-8 w-8 cursor-pointer">
					{/* <AvatarImage
						src="/avatars/01.png"
						alt={user.name}
					/> */}
					<AvatarFallback className="text-sm">{initials}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-56"
				align="end"
				forceMount
			>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">{user.name}</p>
						<p className="text-xs leading-none text-muted-foreground">
							{user.email}
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<Link href={route("profile.edit")}>
						<DropdownMenuItem className="cursor-pointer">
							<UserIcon className="mr-2 h-4 w-4" />
							Profile
							<DropdownMenuShortcut>P</DropdownMenuShortcut>
						</DropdownMenuItem>
					</Link>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<SunIcon className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<MoonIcon className="absolute mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
							Toggle Theme
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent sideOffset={4}>
								<DropdownMenuItem onClick={() => setTheme("light")}>
									Light
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => setTheme("dark")}>
									Dark
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => setTheme("system")}>
									System
								</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<Link
					href={route("logout")}
					method="post"
				>
					<DropdownMenuItem className="cursor-pointer">
						<LogOutIcon className="mr-2 h-4 w-4" />
						Log out
						<DropdownMenuShortcut>L</DropdownMenuShortcut>
					</DropdownMenuItem>
				</Link>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export { UserNav }
