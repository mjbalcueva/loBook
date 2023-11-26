import { useForm } from "@inertiajs/react"
import { FormEventHandler, useEffect } from "react"

import { Form } from "@/Components/form-inertia"

const SignupForm = () => {
	const { data, setData, post, processing, errors, reset } = useForm({
		name: "",
		email: "",
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
		post(route("signup"))
	}

	return (
		<Form
			onSubmit={onSubmit}
			className="space-y-4"
		>
			<Form.Input
				label="Name"
				value={data.name}
				onChange={(e) => setData("name", e.target.value)}
				placeholder="Juan Dela Cruz"
				message={errors.name}
			/>

			<Form.Input
				label="Email"
				type="email"
				value={data.email}
				onChange={(e) => setData("email", e.target.value)}
				placeholder="juandelacruz@gmail.com"
				message={errors.email}
			/>

			<Form.Input
				label="Password"
				password
				value={data.password}
				onChange={(e) => setData("password", e.target.value)}
				placeholder="**********"
				message={errors.password}
			/>

			<Form.Input
				password
				label="Confirm Password"
				value={data.password_confirmation}
				onChange={(e) => setData("password_confirmation", e.target.value)}
				placeholder="**********"
				message={errors.password_confirmation}
			/>

			<Form.Action
				processing={processing}
				className="w-full"
			>
				Continue
			</Form.Action>
		</Form>
	)
}

export default SignupForm
