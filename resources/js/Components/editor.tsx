import { FC } from "react"

import { BlockNoteEditor, PartialBlock } from "@blocknote/core"
import "@blocknote/core/style.css"
import {
	BlockNoteView,
	Theme,
	darkDefaultTheme,
	lightDefaultTheme,
	useBlockNote,
} from "@blocknote/react"

import { useTheme } from "@/Components/providers/theme-provider"

const darkTheme = {
	...darkDefaultTheme,
	colors: {
		...darkDefaultTheme.colors,
		editor: {
			text: "#f8fafc",
			background: "#020817",
		},
		menu: {
			text: "#f8fafc",
			background: "#020817",
		},
		tooltip: {
			text: "#f8fafc",
			background: "#1e293b",
		},
		hovered: {
			text: "#f8fafc",
			background: "#1e293b",
		},
		selected: {
			text: "#f8fafc",
			background: "#1e293b",
		},
		disabled: {
			text: "#94a3b8",
			background: "#121926",
		},
		border: "#1e293b",
		sideMenu: "#94a3b8",
	},
} satisfies Theme

const theme = {
	light: lightDefaultTheme,
	dark: darkTheme,
}

interface Props {
	onChange: (value: string) => void
	initialContent?: string
	editable?: boolean
}

const Editor: FC<Props> = ({ onChange, initialContent, editable }) => {
	const { theme: resolvedTheme } = useTheme()

	const editor: BlockNoteEditor = useBlockNote({
		editable,
		initialContent: initialContent
			? (JSON.parse(initialContent) as PartialBlock[])
			: undefined,
		onEditorContentChange: (editor) => {
			onChange(JSON.stringify(editor.topLevelBlocks, null, 2))
		},
	})

	return (
		<BlockNoteView
			editor={editor}
			theme={resolvedTheme === "dark" ? theme.dark : theme.light}
		/>
	)
}

export { Editor }
