import { FC, PropsWithChildren } from "react"

import { TailwindProvider } from "@/Components/providers/tailwind-provider"
import { ThemeProvider } from "@/Components/providers/theme-provider"

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider
			defaultTheme="system"
			storageKey="vite-ui-theme"
		>
			<TailwindProvider />
			{children}
		</ThemeProvider>
	)
}

export { DefaultLayout }
