import { Link, useForm } from "@inertiajs/react"
import { FC, FormEventHandler, useEffect } from "react"

import {
	Form,
	FormItem,
	FormMessage,
	FormProcessing,
} from "@/Components/form-inertia"
import { PasswordInput } from "@/Components/password-input"
import { Button, buttonVariants } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { cn } from "@/Lib/utils"

interface Props {}

const RegisterForm: FC<Props> = ({}) => {
	const { data, setData, post, processing, errors, reset } = useForm({
		name: "",
		email: "",
		password: "",
		password_confirmation: "",
	})
	useEffect(() => {
		return () => {
			reset("password", "password_confirmation")
		}
	}, [])
	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault()
		post(route("register"))
	}
	return (
		<Form>
			<form
				onSubmit={onSubmit}
				className="space-y-2"
			>
				<FormItem>
					<Label htmlFor="name">Name</Label>
					<Input
						id="name"
						type="text"
						value={data.name}
						onChange={(e) => setData("name", e.target.value)}
						placeholder="Your Name"
						autoComplete="name"
					/>
					<FormMessage
						message={errors.name}
						className="text-sm font-medium text-destructive"
					/>
				</FormItem>
				<FormItem>
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						value={data.email}
						onChange={(e) => setData("email", e.target.value)}
						placeholder="Your Email"
						autoComplete="username"
					/>
					<FormMessage
						message={errors.email}
						className="mt-2 text-sm font-medium text-destructive"
					/>
				</FormItem>
				<FormItem>
					<Label htmlFor="password">Password</Label>
					<PasswordInput
						id="password"
						value={data.password}
						onChange={(e) => setData("password", e.target.value)}
						autoComplete="new-password"
					/>
					<FormMessage
						message={errors.password}
						className="mt-2 text-sm font-medium text-destructive"
					/>
				</FormItem>
				<FormItem>
					<Label htmlFor="password_confirmation">Confirm Password</Label>
					<PasswordInput
						id="password_confirmation"
						value={data.password_confirmation}
						onChange={(e) => setData("password_confirmation", e.target.value)}
						autoComplete="new-password"
					/>
					<FormMessage
						message={errors.password}
						className="mt-2 text-sm font-medium text-destructive"
					/>
				</FormItem>
				<div className="mt-4 flex items-center justify-end">
					<Link
						href={route("login")}
						className={cn(
							buttonVariants({ variant: "link", size: "sm" }),
							"text-muted-foreground hover:text-secondary-foreground",
						)}
					>
						Already registered?
					</Link>
					<Button
						disabled={processing}
						type="submit"
					>
						<FormProcessing
							processing={processing}
							textDefault="Register"
							textProcessing="Registering..."
							textSuccess="Registered!"
						/>
					</Button>
				</div>
			</form>
		</Form>
	)
}

export { RegisterForm }
