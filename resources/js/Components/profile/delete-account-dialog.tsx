import { useState } from "react"

import { Button } from "@/Components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/Components/ui/dialog"

import DeleteAccountForm from "./delete-account.form"

const DeleteAccountDialog = () => {
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogTrigger asChild>
				<Button variant={"destructive"}>Delete Account</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.{" "}
						<span className="font-medium">Enter your password</span> to confirm
						that you would like to permanently delete your account.
					</DialogDescription>
				</DialogHeader>
				<DeleteAccountForm
					setOpen={setOpen}
					setLoading={setLoading}
				/>
				<DialogFooter>
					<Button
						variant={"outline"}
						onClick={() => setOpen(false)}
					>
						Cancel
					</Button>
					<Button
						disabled={loading}
						variant={"destructive"}
						type="submit"
						form="delete-account-form"
					>
						Continue
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

export default DeleteAccountDialog
