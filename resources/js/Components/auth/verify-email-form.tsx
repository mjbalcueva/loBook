import { Link, useForm } from "@inertiajs/react"
import { FormEventHandler } from "react"

import { Form } from "@/Components/form-inertia"
import { Badge } from "@/Components/ui/badge"
import { buttonVariants } from "@/Components/ui/button"

interface Props {
	status?: string
}

const VerifyEmailForm = ({ status }: Props) => {
	const { post, processing } = useForm({})

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault()
		post(route("verification.send"))
	}

	return (
		<Form
			onSubmit={onSubmit}
			className="space-y-4"
		>
			{status === "verification-link-sent" && (
				<p className="text-sm text-muted-foreground">
					A new verification link has been sent to the email address you
					provided during the sign up process.
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

export default VerifyEmailForm
