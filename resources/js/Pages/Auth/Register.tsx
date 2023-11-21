import { FC } from "react"

import { RegisterForm } from "@/Components/auth/register-form"
import { AuthLayout } from "@/Layouts/auth-layout"

interface Props {}

const Register: FC<Props> = ({}) => {
	return (
		<AuthLayout
			pageTitle="Register"
			cardTitle="Create an Account"
			cardDescription="Enter your name and email to create an account."
		>
			<RegisterForm />
		</AuthLayout>
	)
}

export default Register
