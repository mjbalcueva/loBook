import { useForm } from "@inertiajs/react"
import { FormEventHandler, useEffect } from "react"

import { Form } from "@/Components/form-inertia"
import { AuthLayout } from "@/Layouts/auth-layout"

interface Props {
	token: string
	email: string
}

const ResetPassword = ({ token, email }: Props) => {
	const { data, setData, post, processing, errors, reset } = useForm({
		token: token,
		email: email,
		password: "",
		password_confirmation: "",
	})
	useEffect(() => {
		return () => {
			reset("password", "password_confirmation")
		}
	}, [])

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault()
		post(route("password.store"))
	}

	return (
		<Form
			onSubmit={onSubmit}
			className="space-y-2"
		>
			<Form.Input
				label="Email"
				type="email"
				value={data.email}
				onChange={(e) => setData("email", e.target.value)}
				placeholder="Your Email"
				autoComplete="username"
				message={errors.email}
			/>

			<Form.Input
				label="New Password"
				password
				value={data.password}
				onChange={(e) => setData("password", e.target.value)}
				autoComplete="new-password"
				message={errors.password}
			/>

			<Form.Input
				password
				label="Confirm Password"
				value={data.password_confirmation}
				onChange={(e) => setData("password_confirmation", e.target.value)}
				autoComplete="new-password"
				message={errors.password_confirmation}
			/>

			<div className="mt-4 flex items-center justify-end">
				<Form.Action processing={processing}>Reset Password</Form.Action>
			</div>
		</Form>
	)
}

ResetPassword.layout = (page: React.ReactNode) => (
	<AuthLayout
		pageTitle="Password Reset"
		cardTitle="Password Reset"
		cardDescription="Enter your email and new password."
	>
		{page}
	</AuthLayout>
)

export default ResetPassword
