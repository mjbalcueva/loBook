import { Link } from "@inertiajs/react"
import { FC, HTMLAttributes, ReactNode } from "react"

import {
	ChevronLeftIcon,
	ChevronRightIcon,
	ChevronsLeftIcon,
	ChevronsRightIcon,
	MoreHorizontalIcon,
} from "lucide-react"

import { ButtonProps, buttonVariants } from "@/Components/ui/button"
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
				variant={"outline"}
			/>
			<PageLink
				href={prev_page_url || ""}
				label={<ChevronLeftIcon className="h-5 w-5" />}
				variant={"outline"}
			/>

			{links.slice(1, -1).map((link, key) => (
				<div key={key}>
					{link.label === "..." ? (
						<PageLink
							href={link.url || ""}
							label={<MoreHorizontalIcon className="h-5 w-5" />}
							variant={"outline"}
							className="cursor-default border-none hover:bg-transparent"
						/>
					) : (
						<PageLink
							href={link.url || ""}
							variant={link.active ? "default" : "outline"}
							label={link.label}
						/>
					)}
				</div>
			))}

			<PageLink
				href={next_page_url || ""}
				label={<ChevronRightIcon className="h-5 w-5" />}
				variant={"outline"}
			/>
			<PageLink
				href={last_page_url}
				label={<ChevronsRightIcon className="h-5 w-5" />}
				variant={"outline"}
			/>
		</div>
	)
}
interface PageLinkProps {
	href: string
	label: ReactNode
	variant?: "default" | "outline" | "link"
	className?: string
}

const PageLink: FC<PageLinkProps> = ({ href, label, variant, className }) => {
	return (
		<Link
			href={href}
			className={cn(
				buttonVariants({
					variant: variant,
					size: "icon",
					className: "mx-0.5",
				}),
				"select-none",
				className,
			)}
			as="button"
		>
			{label}
		</Link>
	)
}

export { Paginate }
