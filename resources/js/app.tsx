import { createInertiaApp } from "@inertiajs/react"
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers"
import { createRoot } from "react-dom/client"

import { DefaultLayout } from "@/Layouts/default-layout"

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
				((page: any) => <DefaultLayout>{page}</DefaultLayout>)
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
