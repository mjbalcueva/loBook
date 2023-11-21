import { Link, useForm } from "@inertiajs/react"
import { FormEventHandler } from "react"

import { Form } from "@/Components/form-inertia"
import { Badge } from "@/Components/ui/badge"
import { buttonVariants } from "@/Components/ui/button"
import { AuthLayout } from "@/Layouts/auth-layout"

interface Props {
	status?: string
}

const VerifyEmail = ({ status }: Props) => {
	const { post, processing } = useForm({})

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault()

		post(route("verification.send"))
	}

	return (
		<Form
			onSubmit={onSubmit}
			className="space-y-6"
		>
			{status === "verification-link-sent" && (
				<p className="text-sm text-muted-foreground">
					A new verification link has been sent to the email address you
					provided during registration.
					<Badge
						variant={"outline"}
						className="ml-2 text-secondary-foreground"
					>
						link sent
					</Badge>
				</p>
			)}

			<div className="flex items-center justify-between">
				<Form.Action
					processing={processing}
					onProcess="Sending..."
					onSuccess="Sent!"
				>
					Resend Verification Email
				</Form.Action>

				<Link
					href={route("logout")}
					method="post"
					as="button"
					className={buttonVariants({ variant: "link" })}
				>
					Log Out
				</Link>
			</div>
		</Form>
	)
}

VerifyEmail.layout = (page: React.ReactNode) => (
	<AuthLayout
		pageTitle="Verify Email"
		cardTitle="Thanks for signing up!"
		cardDescription="Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."
	>
		{page}
	</AuthLayout>
)

export default VerifyEmail
