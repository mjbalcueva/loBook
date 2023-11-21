import { FC } from "react"

import { ForgotPasswordForm } from "@/Components/auth/forgot-password-form"
import { AuthLayout } from "@/Layouts/auth-layout"

interface Props {
	status?: string
}

const ForgotPassword: FC<Props> = ({ status }) => {
	return (
		<AuthLayout
			pageTitle="Forgot Password"
			cardTitle="Forgot your password?"
			cardDescription="No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."
		>
			<ForgotPasswordForm status={status} />
		</AuthLayout>
	)
}
export default ForgotPassword
