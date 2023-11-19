import {
	Dispatch,
	FormEventHandler,
	SetStateAction,
	useEffect,
	useRef,
} from "react"

import { useForm } from "@inertiajs/react"

import { Form, FormItem, FormMessage } from "@/Components/form-inertia"
import { PasswordInput } from "@/Components/password-input"
import { Label } from "@/Components/ui/label"

interface Props {
	setOpen: Dispatch<SetStateAction<boolean>>
	setLoading: Dispatch<SetStateAction<boolean>>
}

const DeleteAccountForm: React.FC<Props> = ({ setOpen, setLoading }) => {
	const passwordInput = useRef<HTMLInputElement>(null)

	const {
		data,
		setData,
		delete: destroy,
		processing,
		reset,
		errors,
	} = useForm({
		password: "",
	})

	useEffect(() => {
		processing ? setLoading(true) : setLoading(false)
	}, [processing])

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault()

		destroy(route("profile.destroy"), {
			preserveScroll: true,
			onSuccess: () => setOpen(false),
			onError: () => passwordInput.current?.focus(),
			onFinish: () => reset(),
		})
	}

	return (
		<Form>
			<form
				id="delete-account-form"
				onSubmit={onSubmit}
				className="space-y-4"
			>
				<FormItem>
					<Label htmlFor="password">Password</Label>
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
			</form>
		</Form>
	)
}

export default DeleteAccountForm
