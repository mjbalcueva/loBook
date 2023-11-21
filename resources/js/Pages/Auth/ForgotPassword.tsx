import { useForm } from "@inertiajs/react"
import { FormEventHandler } from "react"

import { Form, FormMessage } from "@/Components/form-inertia"
import { AuthLayout } from "@/Layouts/auth-layout"

interface Props {
	status?: string
}

const ForgotPassword = ({ status }: Props) => {
	const { data, setData, post, processing, errors, recentlySuccessful } =
		useForm({
			email: "",
		})

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault()

		post(route("password.email"))
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
			>
				<FormMessage message={errors.email} />
				<FormMessage
					success
					message={status}
				/>
			</Form.Input>

			<div className="mt-4 flex items-center justify-end">
				<Form.Action
					processing={processing}
					recentlySuccessful={recentlySuccessful}
					onProcess="Sending..."
					onSuccess="Sent!"
				>
					Email Password Reset Link
				</Form.Action>
			</div>
		</Form>
	)
}

ForgotPassword.layout = (page: React.ReactNode) => (
	<AuthLayout
		pageTitle="Forgot Password"
		cardTitle="Forgot your password?"
		cardDescription="No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."
	>
		{page}
	</AuthLayout>
)

export default ForgotPassword
