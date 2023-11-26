import { Link } from "@inertiajs/react"

import SigninForm from "@/Components/auth/signin-form"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card"
import { UnauthenticatedLayout } from "@/Layouts/unauthenticated-layout"

interface Props {
	canResetPassword: boolean
	status?: string
}

const Signin = ({ canResetPassword, status }: Props) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Sign in</CardTitle>
				<CardDescription>Sign in to continue</CardDescription>
			</CardHeader>
			<CardContent>
				<SigninForm status={status} />
			</CardContent>
			<CardFooter className="flex flex-wrap items-center justify-between gap-2">
				<div className="text-sm text-muted-foreground">
					<span className="mr-1 hidden sm:inline-block">
						Don&apos;t have an account?
					</span>
					<Link
						aria-label="Sign up"
						href={route("signup")}
						className="text-primary underline-offset-4 transition-colors hover:underline"
					>
						Sign up
					</Link>
				</div>
				{canResetPassword && (
					<Link
						aria-label="Reset password"
						href={route("password.request")}
						className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
					>
						Reset password
					</Link>
				)}
			</CardFooter>
		</Card>
	)
}

Signin.layout = (page: React.ReactNode) => (
	<UnauthenticatedLayout pageTitle="Sign In">{page}</UnauthenticatedLayout>
)
export default Signin
