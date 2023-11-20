import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card"

import UpdatePasswordForm from "./update-password-form"

const UpdatePassword = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Update Password</CardTitle>
				<CardDescription>
					Ensure your account is using a long, random password to stay secure.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<UpdatePasswordForm />
			</CardContent>
		</Card>
	)
}

export default UpdatePassword
