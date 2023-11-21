import { useForm } from "@inertiajs/react"
import { FormEventHandler, useEffect } from "react"

import { Form } from "@/Components/form-inertia"
import { AuthLayout } from "@/Layouts/auth-layout"

const ConfirmPassword = () => {
	const { data, setData, post, processing, errors, reset } = useForm({
		password: "",
	})
	useEffect(() => {
		return () => {
			reset("password")
		}
	}, [])

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault()

		post(route("password.confirm"))
	}

	return (
		<Form
			onSubmit={onSubmit}
			className="space-y-2"
		>
			<Form.Input
				label="Password"
				password
				value={data.password}
				onChange={(e) => setData("password", e.target.value)}
				autoComplete="password"
				message={errors.password}
			/>

			<div className="flex items-center justify-end">
				<Form.Action processing={processing}>Confirm</Form.Action>
			</div>
		</Form>
	)
}

ConfirmPassword.layout = (page: React.ReactNode) => (
	<AuthLayout
		pageTitle="Confirm Password"
		cardTitle="Confirm password"
		cardDescription="This is a secure area of the application. Please confirm your password before continuing."
	>
		{page}
	</AuthLayout>
)

export default ConfirmPassword
