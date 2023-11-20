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

interface FormProcessingProps {
	processing: boolean
	recentlySuccessful?: boolean
	textDefault?: string
	textProcessing?: string
	textSuccess?: string
}

const FormProcessing = ({
	processing,
	recentlySuccessful,
	textDefault,
	textProcessing,
	textSuccess,
}: FormProcessingProps) => {
	return (
		<>
			{processing && (
				<>
					<Loader2Icon className="mr-2 h-5 w-5 animate-spin" />
					<span>{textProcessing || "Saving..."}</span>
				</>
			)}
			{recentlySuccessful && (
				<>
					<CheckCircleIcon className="mr-2 h-5 w-5 " />
					<span>{textSuccess || "Saved"}</span>
				</>
			)}
			{!processing && !recentlySuccessful && (
				<span>{textDefault || "Save"}</span>
			)}
		</>
	)
}

export { Form, FormItem, FormMessage, FormProcessing }
