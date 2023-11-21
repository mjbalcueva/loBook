import { HTMLAttributes } from "react"

import { cva } from "class-variance-authority"
import { CheckCircleIcon, Loader2Icon } from "lucide-react"

import { PasswordInput } from "@/Components/password-input"
import { Button } from "@/Components/ui/button"
import { Checkbox } from "@/Components/ui/checkbox"
import { Input, InputProps } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { cn } from "@/Lib/utils"

const Form = ({ children, ...props }: HTMLAttributes<HTMLFormElement>) => {
	return <form {...props}>{children}</form>
}

const FormItem = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return <div {...props}>{children}</div>
}

const FormMessage = ({
	message,
	success,
	className,
	...props
}: {
	message: string | undefined
	className?: string
	success?: boolean
}) => {
	return (
		message && (
			<p
				className={cn(
					"text-sm font-medium",
					success ? "text-green-600" : "text-destructive",
					className,
				)}
				{...props}
			>
				{message}
			</p>
		)
	)
}

const FormInput = ({
	label,
	password = false,
	message,
	children,
	...props
}: {
	label: string
	password?: boolean
	message?: string
} & InputProps) => {
	return (
		<div>
			<Label htmlFor={label}>{label}</Label>
			{password ? (
				<PasswordInput
					id={label}
					{...props}
				/>
			) : (
				<Input
					id={label}
					{...props}
				/>
			)}
			<FormMessage message={message} />
			{children}
		</div>
	)
}

const FormCheckbox = ({
	label,
	checked,
	onCheckedChange,
}: {
	label: string
	checked?: boolean
	onCheckedChange?: (checked: boolean) => void
}) => {
	return (
		<div className="flex items-center space-x-2 pt-2">
			<Checkbox
				id={label}
				checked={checked}
				onCheckedChange={onCheckedChange}
			/>
			<Label htmlFor={label}>{label}</Label>
		</div>
	)
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
			{!processing && !recentlySuccessful && (children || "Submit")}
		</Button>
	)
}

Form.Input = FormInput
Form.Checkbox = FormCheckbox
Form.Action = FormAction

export { Form, FormItem, FormMessage }
