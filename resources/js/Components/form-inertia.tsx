import { HTMLAttributes } from "react"

import { CheckCircleIcon, Loader2Icon } from "lucide-react"

import { Button } from "@/Components/ui/button"

const Form = ({ children, ...props }: HTMLAttributes<HTMLFormElement>) => {
	return <form {...props}>{children}</form>
}

const FormItem = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return <div {...props}>{children}</div>
}

interface FormMessageProps extends HTMLAttributes<HTMLParagraphElement> {
	message: string | undefined
}
const FormMessage = ({ message, ...props }: FormMessageProps) => {
	return message && <p {...props}>{message}</p>
}

const FormAction = ({
	processing,
	recentlySuccessful,
	text,
	onProcess,
	onSuccess,
	children,
}: {
	text?: string
	onProcess?: string
	onSuccess?: string
	processing: boolean
	recentlySuccessful?: boolean
	children?: React.ReactNode
}) => {
	return (
		<Button
			disabled={processing}
			type="submit"
		>
			{processing && (
				<>
					<Loader2Icon className="mr-2 h-5 w-5 animate-spin" />
					<span>{onProcess || text}</span>
				</>
			)}
			{recentlySuccessful && (
				<>
					<CheckCircleIcon className="mr-2 h-4 w-4 " />
					<span>{onSuccess || text}</span>
				</>
			)}
			{(!processing && !recentlySuccessful && children) || "Submit"}
		</Button>
	)
}

Form.Action = FormAction

export { Form, FormItem, FormMessage }
