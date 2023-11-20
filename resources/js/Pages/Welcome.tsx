import { Head, Link } from "@inertiajs/react"
import { FC } from "react"

import { Button } from "@/Components/ui/button"
import { PageProps } from "@/types"

interface Props extends PageProps {
	laravelVersion: string
	phpVersion: string
}

const Welcome: FC<Props> = ({ auth, laravelVersion, phpVersion }) => {
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

export default Welcome
