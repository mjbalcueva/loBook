import react from "@vitejs/plugin-react"
import laravel from "laravel-vite-plugin"
import million from "million/compiler"
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [
		million.vite({ auto: true }),
		laravel({
			input: "resources/js/app.tsx",
			ssr: "resources/js/ssr.tsx",
			refresh: true,
		}),
		react(),
	],
})
