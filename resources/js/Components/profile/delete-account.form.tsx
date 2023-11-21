import { useForm } from "@inertiajs/react"
import {
	Dispatch,
	FC,
	FormEventHandler,
	SetStateAction,
	useEffect,
	useRef,
} from "react"

import { Form, FormItem, FormMessage } from "@/Components/form-inertia"
import { PasswordInput } from "@/Components/password-input"
import { Label } from "@/Components/ui/label"

interface Props {
	setOpen: Dispatch<SetStateAction<boolean>>
	setLoading: Dispatch<SetStateAction<boolean>>
}

const DeleteAccountForm: FC<Props> = ({ setOpen, setLoading }) => {
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
		<Form
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
					autoComplete="password"
				/>
				<FormMessage
					message={errors.password}
					className="mt-2 text-sm font-medium text-destructive"
				/>
			</FormItem>

			<Form.Input
				label="Password"
				password
				value={data.password}
				onChange={(e) => setData("password", e.target.value)}
				autoComplete="password"
				message={errors.password}
			/>
		</Form>
	)
}

export { DeleteAccountForm }
