import { Head, Link } from "@inertiajs/react"

import { Button } from "@/Components/ui/button"
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
				Laravel version {laravelVersion} (PHP version {phpVersion}) Hello{" "}
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

export default Welcome
