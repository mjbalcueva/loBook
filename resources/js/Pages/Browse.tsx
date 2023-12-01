import { Head, Link } from "@inertiajs/react"

import { Button } from "@/Components/ui/button"

interface Props {
	laravelVersion: string
	phpVersion: string
}

const Browse = ({ laravelVersion, phpVersion }: Props) => {
	return (
		<>
			<Head title="Browse" />
			<p>
				Laravel version {laravelVersion} (PHP version {phpVersion}) Hello{" "}
			</p>

			<Link href={route("uploaded")}>
				<Button>Dashboard</Button>
			</Link>
		</>
	)
}

export default Browse
