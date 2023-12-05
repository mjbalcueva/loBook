import { Link, usePage } from "@inertiajs/react"
import {
	FC,
	ReactNode,
	cloneElement,
	useEffect,
	useMemo,
	useState,
} from "react"

import { BookIcon, SearchIcon } from "lucide-react"
import { For } from "million/react"

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/Components/ui/command"
import { PageProps } from "@/types"

interface Props {
	navLinks: {
		title: string
		href: string
		icon: ReactNode
	}[]
}

const SearchInput: FC<Props> = ({ navLinks }) => {
	const user = usePage<PageProps>().props.auth?.user
	const books = usePage<PageProps>().props.books

	// const allBooks = books?.filter((book) => book.user_id !== user?.id)
	// const userBooks = books?.filter((book) => book.user_id === user?.id)
	const allBooks = useMemo(
		() => books?.filter((book) => book.user_id !== user?.id),
		[books, user],
	)
	const userBooks = useMemo(
		() => books?.filter((book) => book.user_id === user?.id),
		[books, user],
	)

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
				<kbd className="ml-8 flex h-5 select-none items-end gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium lg:ml-16">
					<span className="text-xs">⌘</span>K
				</kbd>
			</button>

			<CommandDialog
				open={open}
				onOpenChange={setOpen}
			>
				<CommandInput placeholder="Looking for a book?" />
				<CommandList>
					<CommandEmpty>No Results found</CommandEmpty>

					<CommandGroup heading="Your Books">
						{userBooks?.slice(0, 3).map((book) => (
							<Link
								href={`/browse/${book.id}`}
								key={book.id}
								onClick={() => setOpen(false)}
							>
								<CommandItem>
									<CustomCommandItem
										icon={<BookIcon className="mr-2 h-4 w-4" />}
										title={book.title}
									/>
								</CommandItem>
							</Link>
						))}
					</CommandGroup>

					<CommandGroup heading="Books">
						{allBooks.slice(0, 3).map((book) => (
							<Link
								href={`/browse/${book.id}`}
								key={book.id}
								onClick={() => setOpen(false)}
							>
								<CommandItem>
									<CustomCommandItem
										icon={<BookIcon className="mr-2 h-4 w-4" />}
										title={book.title}
									/>
								</CommandItem>
							</Link>
						))}
					</CommandGroup>

					<CommandGroup heading="Navigation">
						{navLinks.map((item) => (
							<Link
								href={item.href}
								key={item.href}
								onClick={() => setOpen(false)}
							>
								<CommandItem>
									<CustomCommandItem
										icon={item.icon}
										title={item.title}
									/>
								</CommandItem>
							</Link>
						))}
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	)
}

const CustomCommandItem = ({ icon, title }: { icon: any; title: string }) => {
	const CustomIcon = cloneElement(icon, {
		className: "mr-2 h-2 w-2",
	})

	return (
		<>
			{CustomIcon}
			{title}
		</>
	)
}

export { SearchInput }
