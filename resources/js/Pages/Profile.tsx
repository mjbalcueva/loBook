import DeleteAccount from "@/Components/profile/delete-account"
import ProfileInformation from "@/Components/profile/profile-information"
import UpdatePassword from "@/Components/profile/update-password"
import { AuthenticatedLayout } from "@/Layouts/authenticated-layout"
import { PageProps } from "@/types"

interface Props extends PageProps {
	mustVerifyEmail: boolean
	status?: string
}

const Profile: React.FC<Props> = ({ auth, mustVerifyEmail, status }) => {
	return (
		<AuthenticatedLayout
			user={auth.user}
			title="Profile"
		>
			<div className="container max-w-[800px] space-y-4 pb-16">
				<ProfileInformation
					auth={auth}
					mustVerifyEmail={mustVerifyEmail}
					status={status}
				/>
				<UpdatePassword />
				<DeleteAccount />
			</div>
		</AuthenticatedLayout>
	)
}

export default Profile
