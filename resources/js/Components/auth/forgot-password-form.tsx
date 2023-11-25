import { useForm } from "@inertiajs/react"
import { FormEventHandler } from "react"

import { Form, FormMessage } from "@/Components/form-inertia"

interface Props {
	status?: string
}
const ForgotPasswordForm = ({ status }: Props) => {
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
			className="space-y-4"
		>
			<Form.Input
				label="Email"
				type="email"
				value={data.email}
				onChange={(e) => setData("email", e.target.value)}
				placeholder="juandelacruz@gmail.com"
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

export default ForgotPasswordForm
