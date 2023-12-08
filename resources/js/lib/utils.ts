import { type ClassValue, clsx } from "clsx"
import { format } from "date-fns"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function date(date: string) {
	return format(new Date(date), "MMM d, yyyy - hh:mm a")
}

// const tags = book.genres.split(",").map((genre) => genre.trim())

export function split(value: string) {
	return value.split(",").map((item) => item.trim())
}
