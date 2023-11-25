import { useEffect, useState } from "react"

import { BookIcon, LogOutIcon, SearchIcon, UserIcon } from "lucide-react"

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/Components/ui/command"

const SearchInput = () => {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen((open) => !open)
			}
		}
		document.addEventListener("keydown", down)
		return () => document.removeEventListener("keydown", down)
	}, [])

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className="flex h-8 items-center gap-x-2 rounded-full border px-2 text-muted-foreground transition hover:bg-accent dark:hover:bg-accent/60"
			>
				<SearchIcon className="h-4 w-4" />
				<p className="text-sm font-semibold transition">Search</p>
				<kbd className="ml-8 flex h-5 select-none items-end gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
					<span className="text-xs">⌘</span>K
				</kbd>
			</button>

			<CommandDialog
				open={open}
				onOpenChange={setOpen}
			>
				<CommandInput placeholder="Search all channels and members" />
				<CommandList>
					<CommandEmpty>No Results found</CommandEmpty>

					<CommandGroup heading="Books">
						<CommandItem>
							<BookIcon className="mr-2 h-4 w-4" />
							Book 1
						</CommandItem>
						<CommandItem>
							<BookIcon className="mr-2 h-4 w-4" />
							Book 2
						</CommandItem>
						<CommandItem>
							<BookIcon className="mr-2 h-4 w-4" />
							Book 3
						</CommandItem>
					</CommandGroup>

					<CommandGroup heading="Settings">
						<CommandItem>
							<UserIcon className="mr-2 h-4 w-4" />
							Profile
						</CommandItem>
						<CommandItem>
							<LogOutIcon className="mr-2 h-4 w-4" />
							Logout
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	)
}

export { SearchInput }
