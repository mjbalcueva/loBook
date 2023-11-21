import { FC } from "react"

import { LoginForm } from "@/Components/auth/login-form"
import { AuthLayout } from "@/Layouts/auth-layout"

interface Props {
	canResetPassword: boolean
	status?: string
}
const Login: FC<Props> = ({ canResetPassword, status }) => {
	return (
		<AuthLayout
			pageTitle="Login"
			cardTitle="Hello Again!"
			cardDescription="Enter your credentials to access your account."
		>
			<LoginForm
				canResetPassword={canResetPassword}
				status={status}
			/>
		</AuthLayout>
	)
}
export default Login
