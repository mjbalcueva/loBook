import { Head } from "@inertiajs/react"

import { EmptyBooks } from "@/Components/empty-books"

const Favorites = () => {
	return (
		<>
			<Head title="Favorites" />
			<div className="my-4">
				<h2 className="text-3xl font-bold tracking-tight">Favorites</h2>
			</div>
			<EmptyBooks message="No favorite books found!" />
		</>
	)
}

export default Favorites
