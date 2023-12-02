import { HTMLAttributes } from "react"

import { CheckboxProps } from "@radix-ui/react-checkbox"
import { CheckCircleIcon, Loader2Icon } from "lucide-react"

import { PasswordInput } from "@/Components/password-input"
import { Button, ButtonProps } from "@/Components/ui/button"
import { Checkbox } from "@/Components/ui/checkbox"
import { Input, InputProps } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Textarea, TextareaProps } from "@/Components/ui/textarea"
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
		<div className="space-y-2">
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

const FormTextarea = ({
	label,
	message,
	...props
}: {
	label: string
	message?: string
} & TextareaProps) => {
	return (
		<div className="space-y-2">
			<Label htmlFor={label}>{label}</Label>
			<Textarea
				id={label}
				{...props}
			/>
			<FormMessage message={message} />
		</div>
	)
}

const FormImage = ({
	label,
	message,
	...props
}: {
	label: string
	message?: string
} & InputProps) => {
	return (
		<div className="space-y-2">
			<Label htmlFor={label}>{label}</Label>
			<Input
				id={label}
				type="file"
				{...props}
			/>
			<FormMessage message={message} />
		</div>
	)
}

const FormCheckbox = ({
	label,
	checked,
	onCheckedChange,
	className,
	...props
}: {
	label: string
	checked?: boolean
	onCheckedChange?: (checked: boolean) => void
} & CheckboxProps) => {
	return (
		<div className={cn("flex items-center space-x-2", className)}>
			<Checkbox
				id={label}
				checked={checked}
				onCheckedChange={onCheckedChange}
				className="dark:border-slate-500"
				{...props}
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
	...props
}: {
	text?: string
	onProcess?: string
	onSuccess?: string
	processing: boolean
	recentlySuccessful?: boolean
	children?: React.ReactNode
} & ButtonProps) => {
	return (
		<Button
			disabled={processing}
			type="submit"
			{...props}
		>
			{processing && (
				<>
					<Loader2Icon className="mr-2 h-5 w-5 animate-spin" />
					<span>{onProcess || text || children}</span>
				</>
			)}
			{recentlySuccessful && (
				<>
					<CheckCircleIcon className="mr-2 h-4 w-4 " />
					<span>{onSuccess || text || children}</span>
				</>
			)}
			{!processing && !recentlySuccessful && (children || "Submit")}
		</Button>
	)
}

Form.Input = FormInput
Form.Textarea = FormTextarea
Form.Checkbox = FormCheckbox
Form.Action = FormAction
Form.Image = FormImage

export { Form, FormItem, FormMessage }
