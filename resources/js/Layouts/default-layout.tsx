import { PropsWithChildren } from "react"

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return <>{children}</>
}

export { DefaultLayout }
