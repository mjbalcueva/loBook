import { useForm } from "@inertiajs/react"
import { FormEventHandler, useEffect } from "react"

import { Form } from "@/Components/form-inertia"

const ConfirmPasswordForm = () => {
	const { data, setData, post, processing, errors, reset } = useForm({
		password: "",
	})

	useEffect(() => {
		return () => {
			reset("password")
		}
	}, [])

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault()
		post(route("password.confirm"))
	}

	return (
		<Form
			onSubmit={onSubmit}
			className="space-y-4"
		>
			<Form.Input
				label="Password"
				password
				value={data.password}
				onChange={(e) => setData("password", e.target.value)}
				placeholder="**********"
				message={errors.password}
			/>

			<div className="flex items-center justify-end">
				<Form.Action processing={processing}>Confirm</Form.Action>
			</div>
		</Form>
	)
}

export default ConfirmPasswordForm
