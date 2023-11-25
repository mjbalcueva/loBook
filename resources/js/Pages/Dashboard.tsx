import { ReactNode } from "react"

import { AuthenticatedLayout } from "@/Layouts/authenticated-layout"
import { PageProps } from "@/types"

const Dashboard = () => {
	return <>love</>
}

Dashboard.layout = (page: ReactNode & PageProps) => (
	<AuthenticatedLayout
		user={page.props.auth.user}
		title="Dashboard"
	>
		{page}
	</AuthenticatedLayout>
)

export default Dashboard
