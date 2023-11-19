import { Head } from "@inertiajs/react"

import { AuthenticatedLayout } from "@/Layouts/authenticated-layout"
import { PageProps } from "@/types"

import ProfileInformation from "./components/profile-information"

interface Props extends PageProps {
	mustVerifyEmail: boolean
	status?: string
}

const Profile: React.FC<Props> = ({ auth, mustVerifyEmail, status }) => {
	return (
		<AuthenticatedLayout user={auth.user}>
			<Head title="Profile" />

			<div className="container">
				<ProfileInformation
					auth={auth}
					mustVerifyEmail={mustVerifyEmail}
					status={status}
				/>
			</div>
		</AuthenticatedLayout>
	)
}

export default Profile
