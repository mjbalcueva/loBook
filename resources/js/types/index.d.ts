export interface User {
	id: number
	name: string
	email: string
	email_verified_at: string
}

export type PageProps<
	T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
	auth: {
		user: User
	}
	appName?: string
}

export interface Chapter {
	id: number
	title: string
	content: string
	created_at: string
	updated_at: string
}

export interface Chapters {
	chapters: Chapter[]
}

export interface Book {
	title: string
	author: string
	cover: string
	description: string
	genres: string
	chapters: Chapter[]
}

export interface Books {
	books: Book[]
}
