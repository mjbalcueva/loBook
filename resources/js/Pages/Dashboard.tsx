import { Head } from "@inertiajs/react"

import { AuthenticatedLayout } from "@/Layouts/authenticated-layout"
import { PageProps } from "@/types"

interface Props extends PageProps {}

const Dashboard: React.FC<Props> = ({ auth }) => {
	return (
		<AuthenticatedLayout user={auth.user}>
			<Head title="Dashboard" />
		</AuthenticatedLayout>
	)
}

export default Dashboard
