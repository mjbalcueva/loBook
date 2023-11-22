import { Link } from "@inertiajs/react"

import SignupForm from "@/Components/auth/signup-form"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card"
import { UnauthenticatedLayout } from "@/Layouts/unauthenticated-layout"

const Signup = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Sign up</CardTitle>
				<CardDescription>
					Enter your name and email to create an account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<SignupForm />
			</CardContent>
			<CardFooter className="flex flex-wrap items-center justify-between gap-2">
				<div className="text-sm text-muted-foreground">
					<span className="mr-1 hidden sm:inline-block">
						Already have an account?
					</span>
					<Link
						aria-label="Sign in"
						href={route("signin")}
						className="text-primary underline-offset-4 transition-colors hover:underline"
					>
						Sign in
					</Link>
				</div>
			</CardFooter>
		</Card>
	)
}

Signup.layout = (page: React.ReactNode) => (
	<UnauthenticatedLayout pageTitle="Sign Up">{page}</UnauthenticatedLayout>
)

export default Signup
