import { Head, Link } from "@inertiajs/react"
import { ReactNode } from "react"

import { Button } from "@/Components/ui/button"
import { AuthenticatedLayout } from "@/Layouts/authenticated-layout"
import { PageProps } from "@/types"

interface Props extends PageProps {
	laravelVersion: string
	phpVersion: string
}

const Welcome = ({ auth, laravelVersion, phpVersion }: Props) => {
	return (
		<>
			<Head title="Welcome" />

			<p>
				Laravel version {laravelVersion} (PHP version {phpVersion})
			</p>

			{auth.user ? (
				<Link href={route("dashboard")}>
					<Button>Dashboard</Button>
				</Link>
			) : (
				<>
					<Link href={route("login")}>
						<Button variant={"outline"}>Log In</Button>
					</Link>

					<Link href={route("register")}>
						<Button>Register</Button>
					</Link>
				</>
			)}
		</>
	)
}

Welcome.layout = (page: ReactNode & PageProps) => (
	<AuthenticatedLayout
		user={page.props.auth.user}
		title="Dashboard"
	>
		{page}
	</AuthenticatedLayout>
)

export default Welcome
