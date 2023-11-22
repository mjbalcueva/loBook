import VerifyEmailForm from "@/Components/auth/verify-email-form"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card"
import { AuthLayout } from "@/Layouts/auth-layout"

interface Props {
	status?: string
}

const VerifyEmail = ({ status }: Props) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Thanks for signing up!</CardTitle>
				<CardDescription>
					Before getting started, could you verify your email address by
					clicking on the link we just emailed to you? If you didn't receive the
					email, we will gladly send you another
				</CardDescription>
			</CardHeader>
			<CardContent>
				<VerifyEmailForm status={status} />
			</CardContent>
		</Card>
	)
}

VerifyEmail.layout = (page: React.ReactNode) => (
	<AuthLayout pageTitle="Verify Email">{page}</AuthLayout>
)

export default VerifyEmail
