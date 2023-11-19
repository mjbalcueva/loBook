import { FormEventHandler } from "react"

import { Link, useForm } from "@inertiajs/react"

import {
	Form,
	FormItem,
	FormMessage,
	FormSaving,
} from "@/Components/form-inertia"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { PageProps } from "@/types"

interface Props extends PageProps {
	mustVerifyEmail: boolean
	status?: string
}

const ProfileInformationForm: React.FC<Props> = ({
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
		<Form>
			<form
				onSubmit={onSubmit}
				className="space-y-4"
			>
				<FormItem>
					<Label htmlFor="name">Name</Label>
					<Input
						id="name"
						type="text"
						value={data.name}
						onChange={(e) => setData("name", e.target.value)}
						placeholder="Your Name"
						autoComplete="name"
					/>
					<FormMessage
						message={errors.name}
						className="text-sm font-medium text-destructive"
					/>
				</FormItem>
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

				{mustVerifyEmail && auth.user.email_verified_at === null && (
					<div>
						<p>
							Your email address is unverified.
							<Link
								href={route("verification.send")}
								method="post"
								as="button"
							>
								Click here to re-send the verification email.
							</Link>
						</p>

						{status === "verification-link-sent" && (
							<div>
								A new verification link has been sent to your email address.
							</div>
						)}
					</div>
				)}

				<Button
					disabled={processing}
					type="submit"
				>
					Save
				</Button>
				<FormSaving
					processing={processing}
					recentlySuccessful={recentlySuccessful}
				/>
			</form>
		</Form>
	)
}

export default ProfileInformationForm
