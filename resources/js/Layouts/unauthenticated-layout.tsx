import { Head, Link, usePage } from "@inertiajs/react"
import { PropsWithChildren } from "react"

import { Logo } from "@/Components/logo"
import { AspectRatio } from "@/Components/ui/aspect-ratio"
import { RootLayout } from "@/Layouts/root-layout"
import { PageProps } from "@/types"

interface Props extends PropsWithChildren {
	pageTitle: string
}

const UnauthenticatedLayout = ({ pageTitle, children }: Props) => {
	const appName = usePage<PageProps>().props.appName

	return (
		<RootLayout className="antialiased">
			<Head title={pageTitle} />
			<div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-2">
				<AspectRatio ratio={16 / 9}>
					<img
						src="/images/auth-layout.webp"
						alt="Love"
						className="absolute inset-0 object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-background to-background/40 md:to-background/20" />
					<Link
						href="/"
						className="absolute left-8 top-6 z-20 flex items-center text-lg font-bold tracking-tight"
					>
						<Logo className="mr-3 h-8 w-8" />
						<span>{appName}</span>
					</Link>
					<div className="absolute bottom-6 left-8 z-20 line-clamp-3 text-base">
						&ldquo;loBook is a software that lets you view, save, and search for
						books as PDFs. It is designed for book lovers who want to read
						anytime, anywhere.&rdquo;
					</div>
				</AspectRatio>
				<main className="container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-1 md:flex md:translate-y-0">
					<div className="mx-auto w-[450px]">{children}</div>
				</main>
			</div>
		</RootLayout>
	)
}

export { UnauthenticatedLayout }
