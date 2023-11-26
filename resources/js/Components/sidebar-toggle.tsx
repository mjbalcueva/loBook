import { FC } from "react"

import { PanelRightCloseIcon, PanelRightOpenIcon } from "lucide-react"

import { Button, ButtonProps } from "@/Components/ui/button"

interface Props extends ButtonProps {
	expanded: boolean
}

const SidebarToggle: FC<Props> = ({ expanded, ...props }) => {
	return (
		<Button
			variant="ghost"
			size="icon"
			{...props}
		>
			{expanded ? (
				<PanelRightOpenIcon className="h-5 w-5" />
			) : (
				<PanelRightCloseIcon className="h-5 w-5" />
			)}
		</Button>
	)
}

export { SidebarToggle }
