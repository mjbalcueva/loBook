import { FC, HTMLAttributes } from "react"

import { TailwindProvider } from "@/Components/providers/tailwind-provider"
import { ThemeProvider } from "@/Components/providers/theme-provider"
import { Toaster } from "@/Components/ui/toaster"

const RootLayout: FC<HTMLAttributes<HTMLDivElement>> = ({
	children,
	...props
}) => {
	return (
		<div {...props}>
			<ThemeProvider
				defaultTheme="system"
				storageKey="vite-ui-theme"
			>
				<TailwindProvider />
				<Toaster />
				{children}
			</ThemeProvider>
		</div>
	)
}

export { RootLayout }
