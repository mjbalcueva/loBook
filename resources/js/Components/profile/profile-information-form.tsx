import { Link, useForm } from "@inertiajs/react"
import { FC, FormEventHandler } from "react"

import { Form } from "@/Components/form-inertia"
import { Badge } from "@/Components/ui/badge"
import { PageProps } from "@/types"

interface Props extends PageProps {
	mustVerifyEmail: boolean
	status?: string
}

const ProfileInformationForm: FC<Props> = ({
	auth,
	mustVerifyEmail,
	status,
}) => {
	const { data, setData, patch, errors, processing, recentlySuccessful } =
		useForm({
			name: auth.user.name,
			email: auth.user.email,
		})

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault()
		patch(route("profile.update"))
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

			{mustVerifyEmail && auth.user.email_verified_at === null && (
				<p className="text-sm text-muted-foreground">
					Your email address is unverified.{" "}
					<Link
						href={route("verification.send")}
						method="post"
						as="button"
						className="decoration-muted-foreground underline-offset-2 transition hover:text-secondary-foreground hover:underline"
					>
						Click here to re-send the verification email.{"   "}
					</Link>
					{status === "verification-link-sent" && (
						<Badge
							variant={"outline"}
							className="ml-2 text-secondary-foreground"
						>
							link sent.
						</Badge>
					)}
				</p>
			)}

			<Form.Action
				processing={processing}
				recentlySuccessful={recentlySuccessful}
				onProcess="Saving..."
				onSuccess="Saved!"
			>
				Save
			</Form.Action>
		</Form>
	)
}

export { ProfileInformationForm }
