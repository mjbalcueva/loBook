import { router } from "@inertiajs/react"
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
					<DropdownMenuItem
						className="cursor-pointer"
						onClick={() => {
							router.get(route("profile.edit"))
						}}
					>
						<UserIcon className="mr-2 h-4 w-4" />
						Profile
						<DropdownMenuShortcut>P</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger className="group cursor-pointer">
							<SunIcon className="mr-2 block h-4 w-4 transition-colors dark:hidden" />
							<MoonIcon className="mr-2 hidden h-4 w-4 transition-colors dark:block" />
							Toggle Theme
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent sideOffset={4}>
								<DropdownMenuItem
									onClick={() => setTheme("light")}
									className="cursor-pointer"
								>
									Light
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => setTheme("dark")}
									className="cursor-pointer"
								>
									Dark
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => setTheme("system")}
									className="cursor-pointer"
								>
									System
								</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					className="cursor-pointer"
					onClick={() => {
						router.post(route("logout"))
					}}
				>
					<LogOutIcon className="mr-2 h-4 w-4" />
					Log out
					<DropdownMenuShortcut>L</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export { UserNav }
