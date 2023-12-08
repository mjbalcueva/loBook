import { Link, usePage } from "@inertiajs/react"
import { FC, ReactNode, cloneElement, useEffect, useState } from "react"

import { BookIcon, SearchIcon } from "lucide-react"

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/Components/ui/command"
import { Book, PageProps } from "@/types"

interface Props {
	navLinks: {
		title: string
		href: string
		icon: ReactNode
	}[]
}

const SearchInput: FC<Props> = ({ navLinks }) => {
	const user = usePage<PageProps>().props.auth?.user
	const [userBooks, setUserBooks] = useState<Book[]>([])
	const [otherBooks, setOtherBooks] = useState<Book[]>([])
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const fetchBooks = () => {
		setOpen(true)
		setLoading(true)
		fetch("/api/get-books")
			.then((response) => response.json())
			.then((data: { books: Book[] }) => {
				setUserBooks(
					data.books.filter(
						(book) => String(book.user_id) === String(user?.id),
					),
				)
				setOtherBooks(
					data.books.filter(
						(book) => String(book.user_id) !== String(user?.id),
					),
				)
				setLoading(false)
			})
			.catch((error) => {
				console.error("Error fetching books:", error)
				setLoading(false)
			})
	}

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen((open) => {
					if (!open) {
						fetchBooks()
					}
					return !open
				})
			}
		}
		document.addEventListener("keydown", down)
		return () => document.removeEventListener("keydown", down)
	}, [])

	return (
		<>
			<button
				onClick={fetchBooks}
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

					{loading ? (
						<CommandGroup heading="Loading...">
							<CommandItem>
								<CustomCommandItem
									icon={<BookIcon className="mr-2 h-4 w-4" />}
									title="Loading..."
								/>
							</CommandItem>
						</CommandGroup>
					) : (
						<>
							<CommandGroup heading="Your Books">
								{userBooks?.map((book) => (
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

							<CommandGroup heading="Other Books">
								{otherBooks.map((book) => (
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
						</>
					)}

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
			<span className="line-clamp-1">{title}</span>
		</>
	)
}

export { SearchInput }
