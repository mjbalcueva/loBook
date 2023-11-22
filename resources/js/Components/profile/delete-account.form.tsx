import { useForm } from "@inertiajs/react"
import {
	Dispatch,
	FC,
	FormEventHandler,
	SetStateAction,
	useEffect,
	useRef,
} from "react"

import { Form } from "@/Components/form-inertia"

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
			<Form.Input
				label="Password"
				password
				value={data.password}
				onChange={(e) => setData("password", e.target.value)}
				placeholder="**********"
				message={errors.password}
			/>
		</Form>
	)
}

export { DeleteAccountForm }
