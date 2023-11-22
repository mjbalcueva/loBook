import ConfirmPasswordForm from "@/Components/auth/confirm-password-form"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card"
import { UnauthenticatedLayout } from "@/Layouts/unauthenticated-layout"

const ConfirmPassword = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Confirm Password</CardTitle>
				<CardDescription>
					This is a secure area of the application. Please confirm your password
					before continuing.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ConfirmPasswordForm />
			</CardContent>
		</Card>
	)
}

ConfirmPassword.layout = (page: React.ReactNode) => (
	<UnauthenticatedLayout pageTitle="Confirm Password">
		{page}
	</UnauthenticatedLayout>
)

export default ConfirmPassword
