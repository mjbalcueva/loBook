import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card"

import DeleteAccountDialog from "./delete-account-dialog"

const DeleteAccount = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Delete Account</CardTitle>
				<CardDescription>
					Once your account is deleted, all of its resources and data will be
					permanently deleted. Before deleting your account, please download any
					data or information that you wish to retain.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<DeleteAccountDialog />
			</CardContent>
		</Card>
	)
}

export default DeleteAccount
