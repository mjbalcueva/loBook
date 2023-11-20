import { HTMLAttributes } from "react"

import { CheckCircleIcon, Loader2Icon } from "lucide-react"

const Form = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return <div {...props}>{children}</div>
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

interface FormSavingProps {
	text?: string
	processing: boolean
	recentlySuccessful?: boolean
}

const FormSaving = ({
	text,
	processing,
	recentlySuccessful,
}: FormSavingProps) => {
	if (processing) {
		return (
			<>
				<Loader2Icon className="mr-2 h-5 w-5 animate-spin" />
				<span>Saving...</span>
			</>
		)
	}

	if (recentlySuccessful) {
		return (
			<>
				<CheckCircleIcon className="mr-2 h-5 w-5 " />
				<span>Saved!</span>
			</>
		)
	}

	return <span>{text || "Save"}</span>
}

export { Form, FormItem, FormMessage, FormSaving }
