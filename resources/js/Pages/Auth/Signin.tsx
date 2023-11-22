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

const Signin = ({ canResetPassword, status }: Props) => {
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
				<Form.Action processing={processing}>Sign In</Form.Action>
			</div>
		</Form>
	)
}

Signin.layout = (page: React.ReactNode) => (
	<AuthLayout
		pageTitle="Sign In"
		cardTitle="Sign In"
		cardDescription="Sign in to continue"
	>
		{page}
	</AuthLayout>
)
export default Signin
