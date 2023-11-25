import { createInertiaApp } from "@inertiajs/react"
import { ReactNode } from "react"
import { createRoot } from "react-dom/client"

import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers"

import { RootLayout } from "@/Layouts/root-layout"

import "../css/app.css"
import "./bootstrap"

const appName = import.meta.env.VITE_APP_NAME || "Laravel"

createInertiaApp({
	title: (title) => `${title} - ${appName}`,
	resolve: async (name) => {
		const page = resolvePageComponent(
			`./Pages/${name}.tsx`,
			import.meta.glob("./Pages/**/*.tsx"),
		)
		page.then((module: any) => {
			module.default.layout =
				module.default.layout ||
				((page: ReactNode) => <RootLayout>{page}</RootLayout>)
		})
		return page
	},
	setup({ el, App, props }) {
		const root = createRoot(el)

		root.render(<App {...props} />)
	},
	progress: {
		color: "#4B5563",
	},
})
