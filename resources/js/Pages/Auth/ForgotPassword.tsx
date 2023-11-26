import ForgotPasswordForm from "@/Components/auth/forgot-password-form"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card"
import { UnauthenticatedLayout } from "@/Layouts/unauthenticated-layout"

interface Props {
	status?: string
}

const ForgotPassword = ({ status }: Props) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Forgot your password?</CardTitle>
				<CardDescription>
					No problem. Just let us know your email address and we will email you
					a password reset link that will allow you to choose a new one.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ForgotPasswordForm status={status} />
			</CardContent>
		</Card>
	)
}

ForgotPassword.layout = (page: React.ReactNode) => (
	<UnauthenticatedLayout pageTitle="Forgot Password">
		{page}
	</UnauthenticatedLayout>
)

export default ForgotPassword
