import { Link, useForm } from "@inertiajs/react"
import { FormEventHandler, useEffect } from "react"

import { Form } from "@/Components/form-inertia"
import { buttonVariants } from "@/Components/ui/button"
import { AuthLayout } from "@/Layouts/auth-layout"
import { cn } from "@/Lib/utils"

interface Props {
	canResetPassword: boolean
	status?: string
}

const Login = ({ canResetPassword, status }: Props) => {
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

		post(route("login"))
	}
	return (
		<Form
			onSubmit={onSubmit}
			className="space-y-2"
		>
			{status && (
				<div className="mb-4 text-sm font-medium text-green-600">{status}</div>
			)}
			<Form.Input
				type="email"
				value={data.email}
				onChange={(e) => setData("email", e.target.value)}
				placeholder="Your Email"
				autoComplete="username"
				label="Email"
				message={errors.email}
			/>

			<Form.Input
				password
				value={data.password}
				onChange={(e) => setData("password", e.target.value)}
				autoComplete="password"
				label="Password"
				message={errors.password}
			/>
			<Form.Checkbox
				label="Remember Me"
				checked={data.remember}
				onCheckedChange={(checked) => setData("remember", checked as boolean)}
			/>
			<div className="mt-4 flex items-center justify-end">
				{canResetPassword && (
					<Link
						href={route("password.request")}
						className={cn(
							buttonVariants({ variant: "link", size: "sm" }),
							"text-muted-foreground hover:text-secondary-foreground",
						)}
					>
						Forgot your password?
					</Link>
				)}
				<Form.Action processing={processing}>Login</Form.Action>
			</div>
		</Form>
	)
}

Login.layout = (page: React.ReactNode) => (
	<AuthLayout
		pageTitle="Login"
		cardTitle="Hello Again!"
		cardDescription="Enter your credentials to access your account."
	>
		{page}
	</AuthLayout>
)
export default Login
