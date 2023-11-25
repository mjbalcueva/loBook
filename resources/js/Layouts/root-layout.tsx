import { FC, HTMLAttributes } from "react"

import { TailwindProvider } from "@/Components/providers/tailwind-provider"
import { ThemeProvider } from "@/Components/providers/theme-provider"

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
				{children}
			</ThemeProvider>
		</div>
	)
}

export { RootLayout }
