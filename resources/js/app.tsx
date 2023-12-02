import { createInertiaApp } from "@inertiajs/react"
import { createRoot } from "react-dom/client"

import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers"

import { AuthenticatedLayout } from "@/Layouts/authenticated-layout"
import { RootLayout } from "@/Layouts/root-layout"

import "../css/app.css"
import "./bootstrap"

const appName = import.meta.env.VITE_APP_NAME || "Laravel"

createInertiaApp({
	title: (title) => (title ? `${title} - ${appName}` : appName),
	resolve: async (name) => {
		const page = resolvePageComponent(
			`./Pages/${name}.tsx`,
			import.meta.glob("./Pages/**/*.tsx"),
		)
		page.then((module: any) => {
			module.default.layout =
				module.default.layout ||
				((page: any) =>
					page.props.auth.user ? (
						<AuthenticatedLayout user={page.props.auth.user}>
							{page}
						</AuthenticatedLayout>
					) : (
						<RootLayout>{page}</RootLayout>
					))
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
