import { Head } from "@inertiajs/react"

import { DeleteAccount } from "@/Components/profile/delete-account"
import { ProfileInformationForm } from "@/Components/profile/profile-information-form"
import { UpdatePasswordForm } from "@/Components/profile/update-password-form"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card"
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
		<>
			<Head title="Profile" />
			<div className="space-y-4 pb-14 pt-4">
				{cards.map((card) => (
					<Card key={card.title}>
						<CardHeader>
							<CardTitle>{card.title}</CardTitle>
							<CardDescription>{card.description}</CardDescription>
						</CardHeader>
						<CardContent>{card.component}</CardContent>
					</Card>
				))}
			</div>
		</>
	)
}

export default Profile
