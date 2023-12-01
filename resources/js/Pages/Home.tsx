import { Head, Link } from "@inertiajs/react"

import { Button } from "@/Components/ui/button"

interface Props {
	laravelVersion: string
	phpVersion: string
}

const Welcome = ({ laravelVersion, phpVersion }: Props) => {
	return (
		<>
			<Head title="Welcome" />
			<p>
				Laravel version {laravelVersion} (PHP version {phpVersion}) Hello{" "}
			</p>

			<Link href={route("mybooks")}>
				<Button>Dashboard</Button>
			</Link>
		</>
	)
}

export default Welcome
