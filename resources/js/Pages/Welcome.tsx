import { Link } from "@inertiajs/react"
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
			<p>
				Laravel version {laravelVersion} (PHP version {phpVersion})
			</p>

			{auth.user ? (
				<Link href={route("dashboard")}>
					<Button>Dashboard</Button>
				</Link>
			) : (
				<>
					<Link href={route("signin")}>
						<Button variant={"outline"}>Log In</Button>
					</Link>

					<Link href={route("signup")}>
						<Button>Sign Up</Button>
					</Link>
				</>
			)}
		</>
	)
}

Welcome.layout = (page: ReactNode & PageProps) => (
	<AuthenticatedLayout
		user={page.props.auth.user}
		title="Welcome"
	>
		{page}
	</AuthenticatedLayout>
)

export default Welcome
