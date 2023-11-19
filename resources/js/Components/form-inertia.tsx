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
	processing: boolean
	recentlySuccessful: boolean
}

const FormSaving = ({ processing, recentlySuccessful }: FormSavingProps) => {
	return (
		<>
			{processing && (
				<div className="flex items-center space-x-2">
					<Loader2Icon className="h-5 w-5 animate-spin" />
					<span>Saving...</span>
				</div>
			)}
			{recentlySuccessful && (
				<div className="flex items-center space-x-2">
					<CheckCircleIcon className="h-5 w-5 " />
					<span>Saved!</span>
				</div>
			)}
		</>
	)
}

export { Form, FormItem, FormMessage, FormSaving }
