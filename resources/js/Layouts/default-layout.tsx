import { FC, PropsWithChildren } from "react"

import { ModeToggle } from "@/Components/mode-toggle"
import { ThemeProvider } from "@/Components/providers/theme-provider"

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider
			defaultTheme="system"
			storageKey="vite-ui-theme"
		>
			<ModeToggle />
			{children}
		</ThemeProvider>
	)
}

export { DefaultLayout }
