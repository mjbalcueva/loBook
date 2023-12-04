import { Head } from "@inertiajs/react"

import { EmptyState } from "@/Components/empty-state"

const Favorites = () => {
	return (
		<>
			<Head title="Favorites" />
			<div className="my-4">
				<h2 className="text-3xl font-bold tracking-tight">Favorites</h2>
			</div>
			<EmptyState message="No favorite books found!" />
		</>
	)
}

export default Favorites
