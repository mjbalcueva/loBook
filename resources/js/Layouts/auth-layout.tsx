import { Head } from "@inertiajs/react"
import { FC, PropsWithChildren } from "react"

import { ActionCard } from "@/Components/action-card"

interface Props extends PropsWithChildren {
	pageTitle: string
	cardTitle: string
	cardDescription: string
}

const AuthLayout: FC<Props> = ({
	pageTitle,
	cardTitle,
	cardDescription,
	children,
}) => {
	return (
		<>
			<Head title={pageTitle} />
			<div className="flex min-h-screen items-center justify-center">
				<div className="w-[500px]">
					<ActionCard
						title={cardTitle}
						description={cardDescription}
					>
						{children}
					</ActionCard>
				</div>
			</div>
		</>
	)
}

export { AuthLayout }
