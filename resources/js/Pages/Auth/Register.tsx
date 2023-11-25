import { Link, useForm } from "@inertiajs/react"
import { FormEventHandler, useEffect } from "react"

import { Form } from "@/Components/form-inertia"
import { buttonVariants } from "@/Components/ui/button"
import { AuthLayout } from "@/Layouts/auth-layout"
import { cn } from "@/Lib/utils"

const Register = () => {
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
		post(route("register"))
	}

	return (
		<Form
			onSubmit={onSubmit}
			className="space-y-2"
		>
			<Form.Input
				label="Name"
				value={data.name}
				onChange={(e) => setData("name", e.target.value)}
				placeholder="Your Name"
				autoComplete="name"
				message={errors.name}
			/>

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
				label="Password"
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
				<Link
					href={route("login")}
					className={cn(
						buttonVariants({ variant: "link", size: "sm" }),
						"text-muted-foreground hover:text-secondary-foreground",
					)}
				>
					Already registered?
				</Link>

				<Form.Action processing={processing}>Register</Form.Action>
			</div>
		</Form>
	)
}

Register.layout = (page: React.ReactNode) => (
	<AuthLayout
		pageTitle="Register"
		cardTitle="Create an Account"
		cardDescription="Enter your name and email to create an account."
	>
		{page}
	</AuthLayout>
)

export default Register
