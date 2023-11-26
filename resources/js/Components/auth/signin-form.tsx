import { useForm } from "@inertiajs/react"
import { FormEventHandler, useEffect } from "react"

import { Form } from "@/Components/form-inertia"

interface Props {
	status?: string
}

const SigninForm = ({ status }: Props) => {
	const { data, setData, post, processing, errors, reset } = useForm({
		email: "",
		password: "",
		remember: false,
	})

	useEffect(() => {
		return () => reset("password")
	}, [])

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault()

		post(route("signin"))
	}

	return (
		<Form
			onSubmit={onSubmit}
			className="space-y-4"
		>
			{status && (
				<div className="mb-4 text-sm font-medium text-green-600">{status}</div>
			)}
			<Form.Input
				type="email"
				value={data.email}
				onChange={(e) => setData("email", e.target.value)}
				placeholder="juandelacruz@gmail.com"
				label="Email"
				message={errors.email}
			/>

			<Form.Input
				password
				value={data.password}
				onChange={(e) => setData("password", e.target.value)}
				label="Password"
				placeholder="**********"
				message={errors.password}
			/>

			<Form.Checkbox
				label="Remember Me"
				checked={data.remember}
				onCheckedChange={(checked) => setData("remember", checked as boolean)}
				className="text-sm dark:text-muted-foreground"
			/>

			<Form.Action
				processing={processing}
				className="w-full"
			>
				Sign In
			</Form.Action>
		</Form>
	)
}

export default SigninForm
