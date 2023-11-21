import { useForm } from "@inertiajs/react"
import { FormEventHandler } from "react"

import {
	Form,
	FormItem,
	FormMessage,
	FormProcessing,
} from "@/Components/form-inertia"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
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
			<FormItem>
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					type="email"
					value={data.email}
					onChange={(e) => setData("email", e.target.value)}
					placeholder="Your Email"
					autoComplete="username"
				/>
				<FormMessage
					message={errors.email}
					className="mt-2 text-sm font-medium text-destructive"
				/>
				<FormMessage
					message={status}
					className="mt-2 text-sm font-medium text-green-600"
				/>
			</FormItem>

			<div className="mt-4 flex items-center justify-end">
				<Button
					disabled={processing}
					type="submit"
				>
					<FormProcessing
						processing={processing}
						recentlySuccessful={recentlySuccessful}
						textDefault="Email Password Reset Link"
						textProcessing="Sending..."
						textSuccess="Sent!"
					/>
				</Button>
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
