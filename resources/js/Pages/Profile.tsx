import { ReactNode } from "react"

import { ActionCard } from "@/Components/action-card"
import { DeleteAccount } from "@/Components/profile/delete-account"
import { ProfileInformationForm } from "@/Components/profile/profile-information-form"
import { UpdatePasswordForm } from "@/Components/profile/update-password-form"
import { AuthenticatedLayout } from "@/Layouts/authenticated-layout"
import { PageProps } from "@/types"

interface Props extends PageProps {
	mustVerifyEmail: boolean
	status?: string
}

const Profile = ({ auth, mustVerifyEmail, status }: Props) => {
	const cards = [
		{
			title: "Profile Information",
			description:
				"Update your account's profile information and email address.",
			component: (
				<ProfileInformationForm
					auth={auth}
					mustVerifyEmail={mustVerifyEmail}
					status={status}
				/>
			),
		},
		{
			title: "Update Password",
			description:
				"Ensure your account is using a long, random password to stay secure.",
			component: <UpdatePasswordForm />,
		},
		{
			title: "Delete Account",
			description:
				"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.",
			component: <DeleteAccount />,
		},
	]

	return (
		<div className="container max-w-[800px] space-y-4 pb-16">
			{cards.map((card) => (
				<ActionCard
					key={card.title}
					title={card.title}
					description={card.description}
					children={card.component}
				/>
			))}
		</div>
	)
}

Profile.layout = (page: ReactNode & PageProps) => (
	<AuthenticatedLayout
		user={page.props.auth.user}
		title="Profile"
	>
		{page}
	</AuthenticatedLayout>
)

export default Profile
