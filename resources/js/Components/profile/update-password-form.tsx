import { FormEventHandler, useRef } from "react"

import { useForm } from "@inertiajs/react"

import {
	Form,
	FormItem,
	FormMessage,
	FormSaving,
} from "@/Components/form-inertia"
import { PasswordInput } from "@/Components/password-input"
import { Button } from "@/Components/ui/button"
import { Label } from "@/Components/ui/label"

const UpdatePasswordForm = () => {
	const currentPasswordInput = useRef<HTMLInputElement>(null)
	const passwordInput = useRef<HTMLInputElement>(null)

	const { data, setData, errors, put, reset, processing, recentlySuccessful } =
		useForm({
			current_password: "",
			password: "",
			password_confirmation: "",
		})

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault()

		put(route("password.update"), {
			preserveScroll: true,
			onSuccess: () => reset(),
			onError: (errors) => {
				if (errors.current_password) {
					reset("current_password")
					currentPasswordInput.current?.focus()
				}
				if (errors.password) {
					reset("password", "password_confirmation")
					passwordInput.current?.focus()
				}
			},
		})
	}

	return (
		<Form>
			<form
				onSubmit={onSubmit}
				className="space-y-4"
			>
				<FormItem>
					<Label htmlFor="current_password">Current Password</Label>
					<PasswordInput
						id="current_password"
						value={data.current_password}
						onChange={(e) => setData("current_password", e.target.value)}
						ref={currentPasswordInput}
						autoComplete="current-password"
					/>
					<FormMessage
						message={errors.current_password}
						className="text-sm font-medium text-destructive"
					/>
				</FormItem>
				<FormItem>
					<Label htmlFor="password">New Password</Label>
					<PasswordInput
						id="password"
						value={data.password}
						onChange={(e) => setData("password", e.target.value)}
						ref={passwordInput}
						autoComplete="new-password"
					/>
					<FormMessage
						message={errors.password}
						className="mt-2 text-sm font-medium text-destructive"
					/>
				</FormItem>
				<FormItem>
					<Label htmlFor="password_confirmation">Confirm Password</Label>
					<PasswordInput
						id="password_confirmation"
						value={data.password_confirmation}
						onChange={(e) => setData("password_confirmation", e.target.value)}
						autoComplete="new-password"
					/>
					<FormMessage
						message={errors.password}
						className="mt-2 text-sm font-medium text-destructive"
					/>
				</FormItem>

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

export { UpdatePasswordForm }
