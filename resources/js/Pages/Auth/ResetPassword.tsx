import ResetPasswordForm from "@/Components/auth/reset-password-form"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card"
import { AuthLayout } from "@/Layouts/auth-layout"

interface Props {
	token: string
	email: string
}

const ResetPassword = ({ token, email }: Props) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Password Reset</CardTitle>
				<CardDescription>Enter your email and new password</CardDescription>
			</CardHeader>
			<CardContent>
				<ResetPasswordForm
					token={token}
					email={email}
				/>
			</CardContent>
		</Card>
	)
}

ResetPassword.layout = (page: React.ReactNode) => (
	<AuthLayout pageTitle="Password Reset">{page}</AuthLayout>
)

export default ResetPassword
