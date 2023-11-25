import { createInertiaApp } from "@inertiajs/react"
import createServer from "@inertiajs/react/server"
import ReactDOMServer from "react-dom/server"

import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers"
import { RouteName } from "ziggy-js"

import { RootLayout } from "@/Layouts/root-layout"

import route from "../../vendor/tightenco/ziggy/dist/index.m"

const appName = import.meta.env.VITE_APP_NAME || "Laravel"

createServer((page) =>
	createInertiaApp({
		page,
		render: ReactDOMServer.renderToString,
		title: (title) => `${title} - ${appName}`,
		resolve: (name) => {
			const page = resolvePageComponent(
				`./Pages/${name}.tsx`,
				import.meta.glob("./Pages/**/*.tsx"),
			)
			page.then((module: any) => {
				module.default.layout =
					module.default.layout ||
					((page: any) => <RootLayout>{page}</RootLayout>)
			})
			return page
		},
		setup: ({ App, props }) => {
      global.route<RouteName> = (name, params, absolute) =>
        route(name, params, absolute, {
          // @ts-expect-error
          ...page.props.ziggy,
          // @ts-expect-error
          location: new URL(page.props.ziggy.location),
      })
			return <App {...props} />
		},
	}),
)
