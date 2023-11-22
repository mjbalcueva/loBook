import { useForm } from "@inertiajs/react"
import { FormEventHandler, useRef } from "react"

import { Form } from "@/Components/form-inertia"

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
		<Form
			onSubmit={onSubmit}
			className="space-y-4"
		>
			<Form.Input
				password
				label="Current Password"
				value={data.current_password}
				onChange={(e) => setData("current_password", e.target.value)}
				message={errors.current_password}
				placeholder="**********"
			/>

			<Form.Input
				password
				label="New Password"
				value={data.password}
				onChange={(e) => setData("password", e.target.value)}
				message={errors.password}
				placeholder="**********"
			/>

			<Form.Input
				password
				label="Confirm Password"
				value={data.password_confirmation}
				onChange={(e) => setData("password_confirmation", e.target.value)}
				message={errors.password_confirmation}
				placeholder="**********"
			/>

			<Form.Action
				processing={processing}
				recentlySuccessful={recentlySuccessful}
				onProcess="Saving..."
				onSuccess="Saved"
			>
				Save
			</Form.Action>
		</Form>
	)
}

export { UpdatePasswordForm }
