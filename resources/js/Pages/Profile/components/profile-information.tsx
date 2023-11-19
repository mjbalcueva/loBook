import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card"
import { PageProps } from "@/types"

import ProfileInformationForm from "./profile-information-form"

interface Props extends PageProps {
	mustVerifyEmail: boolean
	status?: string
}

const ProfileInformation: React.FC<Props> = ({
	auth,
	mustVerifyEmail,
	status,
}) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Profile Information</CardTitle>
				<CardDescription>
					Update your account's profile information and email address.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ProfileInformationForm
					auth={auth}
					mustVerifyEmail={mustVerifyEmail}
					status={status}
				/>
			</CardContent>
		</Card>
	)
}

export default ProfileInformation
