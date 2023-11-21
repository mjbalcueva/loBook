import { FC } from "react"

import { ActionCard } from "@/Components/action-card"
import { ForgotPasswordForm } from "@/Components/auth/forgot-password-form"
import { AuthLayout } from "@/Layouts/auth-layout"

interface Props {
	status?: string
}

const ForgotPassword: FC<Props> = ({ status }) => {
	return (
		<AuthLayout title="Forgot Password">
			<ActionCard
				title="Forgot your password?"
				description="No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."
			>
				<ForgotPasswordForm status={status} />
			</ActionCard>
		</AuthLayout>
	)
}
export default ForgotPassword
