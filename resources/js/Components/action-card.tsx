import { PropsWithChildren } from "react"

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card"

interface Props extends PropsWithChildren {
	title: string
	description: string
}

const ActionCard: React.FC<Props> = ({ title, description, children }) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	)
}

export { ActionCard }
