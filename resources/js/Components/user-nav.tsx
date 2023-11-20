import { Link } from "@inertiajs/react"
import { LogOutIcon, UserIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/Components/ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import { User } from "@/types"

interface Props {
	user: User
}

const UserNav: React.FC<Props> = ({ user }) => {
	const initials = user.name
		.split(" ")
		.map((n) => n[0])
		.join("")
		.slice(0, 2)
		.toUpperCase()

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Avatar className="h-8 w-8 cursor-pointer">
						{/* <AvatarImage
							src="/avatars/01.png"
							alt={user.name}
						/> */}
						<AvatarFallback>{initials}</AvatarFallback>
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
		</>
	)
}

export { UserNav }
