import { FC } from "react"

import { ActionCard } from "@/Components/action-card"
import { LoginForm } from "@/Components/auth/login-form"
import { AuthLayout } from "@/Layouts/auth-layout"

interface Props {
	canResetPassword: boolean
	status?: string
}
const Login: FC<Props> = ({ canResetPassword, status }) => {
	return (
		<AuthLayout title="Login">
			<ActionCard
				title="Hello Again!"
				description="Enter your credentials to access your account."
			>
				<LoginForm
					canResetPassword={canResetPassword}
					status={status}
				/>
			</ActionCard>
		</AuthLayout>
	)
}
export default Login
