import { Link } from "@inertiajs/react"
import { FC, HTMLAttributes, ReactNode } from "react"

import {
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronsLeftIcon,
	ChevronsRightIcon,
	MoreHorizontalIcon,
} from "lucide-react"

import { buttonVariants } from "@/Components/ui/button"
import { cn } from "@/Lib/utils"
import { Page } from "@/types"

interface Props extends HTMLAttributes<HTMLDivElement> {
	bookData: Page
}
const Paginate: FC<Props> = ({ bookData, className, ...props }) => {
	const { first_page_url, prev_page_url, next_page_url, last_page_url, links } =
		bookData
	return (
		<div
			{...props}
			className={cn("flex items-center justify-center", className)}
		>
			<PageLink
				href={first_page_url}
				label={<ChevronsLeftIcon className="h-5 w-5" />}
			/>
			<PageLink
				href={prev_page_url || ""}
				label={<ChevronLeftIcon className="h-5 w-5" />}
			/>

			{links.slice(1, -1).map((link, i) => (
				<>
					{link.label === "..." ? (
						<PageLink
							key={i}
							href={link.url || ""}
							variant={link.active ? "default" : "outline"}
							label={<MoreHorizontalIcon className="h-5 w-5" />}
							className="border-none"
						/>
					) : (
						<PageLink
							key={i}
							href={link.url || ""}
							variant={link.active ? "default" : "outline"}
							label={link.label}
						/>
					)}
				</>
			))}

			<PageLink
				href={next_page_url || ""}
				label={<ChevronRightIcon className="h-5 w-5" />}
			/>
			<PageLink
				href={last_page_url}
				label={<ChevronsRightIcon className="h-5 w-5" />}
			/>
		</div>
	)
}
interface PageLinkProps {
	href: string
	label: ReactNode
	className?: string
	variant?: "default" | "outline" | "link"
}

const PageLink: FC<PageLinkProps> = ({ href, label, className, variant }) => {
	return (
		<Link
			href={href}
			className={cn(
				buttonVariants({
					variant: variant || "outline",
					size: "icon",
					className: "mx-0.5",
				}),
				"select-none",
				className,
			)}
		>
			{label}
		</Link>
	)
}

export { Paginate }
