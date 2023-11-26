import { useForm } from "@inertiajs/react"
import { FormEventHandler, useEffect } from "react"

import { Form } from "@/Components/form-inertia"

interface Props {
	token: string
	email: string
}

const ResetPasswordForm = ({ token, email }: Props) => {
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
			className="space-y-4"
		>
			<Form.Input
				label="Email"
				type="email"
				value={data.email}
				onChange={(e) => setData("email", e.target.value)}
				placeholder="juandelacruz@gmail.com"
				message={errors.email}
			/>

			<Form.Input
				label="New Password"
				password
				value={data.password}
				onChange={(e) => setData("password", e.target.value)}
				message={errors.password}
				placeholder="**********"
			/>

			<Form.Input
				password
				label="Confirm Password"
				value={data.password_confirmation}
				onChange={(e) => setData("password_confirmation", e.target.value)}
				message={errors.password_confirmation}
				placeholder="**********"
			/>

			<div className="mt-4 flex items-center justify-end">
				<Form.Action processing={processing}>Reset Password</Form.Action>
			</div>
		</Form>
	)
}

export default ResetPasswordForm
