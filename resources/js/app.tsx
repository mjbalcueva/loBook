import { createInertiaApp } from "@inertiajs/react"
import { ReactNode } from "react"
import { createRoot } from "react-dom/client"

import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers"

import { AuthenticatedLayout } from "@/Layouts/authenticated-layout"

import "../css/app.css"
import "./bootstrap"
import { PageProps } from "./types"

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
				((page: ReactNode & PageProps) => (
					<AuthenticatedLayout user={page.props.auth.user}>
						{page}
					</AuthenticatedLayout>
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
