import { UserNav } from "@/Components/user-nav"
import { User } from "@/types"

interface Props {
	user: User
	children: React.ReactNode
}

const AuthenticatedLayout: React.FC<Props> = ({ user, children }) => {
	return (
		<>
			<UserNav user={user} />
			{children}
		</>
	)
}

export { AuthenticatedLayout }
