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
			<div className="my-4">
				<h2 className="text-3xl font-bold tracking-tight">Browse</h2>
			</div>

			<p>
				Laravel version {laravelVersion} (PHP version {phpVersion}) Hello{" "}
			</p>

			<Link href={route("uploads")}>
				<Button>Uploads</Button>
			</Link>
		</>
	)
}

export default Browse
