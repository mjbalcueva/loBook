export interface User {
	id: number
	name: string
	email: string
	email_verified_at: string
}

export type PageProps<
	T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
	appName?: string
	auth: {
		user: User
	}
}

export interface Chapter {
	id: number
	book_id: number
	title: string
	content: string
	created_at: string
	updated_at: string
}

export interface Book {
	id: number
	user_id: number
	title: string
	author: string
	cover: string
	description: string
	genres: string
	created_at: string
	updated_at: string
	chapters?: Chapter[]
}

export interface Link {
	url: string | null
	label: string
	active: boolean
}

export interface Page {
	current_page: number
	first_page_url: string
	from: number | null
	last_page: number
	last_page_url: string
	links: Link[]
	next_page_url: string | null
	path: string
	per_page: number
	prev_page_url: string | null
	to: number | null
	total: number
}
