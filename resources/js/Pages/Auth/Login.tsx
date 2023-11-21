import { Link, useForm } from "@inertiajs/react"
import { FormEventHandler, useEffect } from "react"

import { Form, FormItem, FormMessage } from "@/Components/form-inertia"
import { PasswordInput } from "@/Components/password-input"
import { buttonVariants } from "@/Components/ui/button"
import { Checkbox } from "@/Components/ui/checkbox"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
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
			</FormItem>
			<FormItem>
				<Label htmlFor="password">Password</Label>
				<PasswordInput
					id="password"
					value={data.password}
					onChange={(e) => setData("password", e.target.value)}
					autoComplete="password"
				/>
				<FormMessage
					message={errors.password}
					className="mt-2 text-sm font-medium text-destructive"
				/>
			</FormItem>
			<FormItem className="flex items-center space-x-2 pt-2">
				<Checkbox
					id="remember"
					checked={data.remember}
					onCheckedChange={(checked) => setData("remember", checked as boolean)}
				/>
				<Label htmlFor="remember">Remember Me</Label>
			</FormItem>
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
