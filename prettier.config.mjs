/** @type {import('prettier').Config & import('@trivago/prettier-plugin-sort-imports').PrettierConfig & import('prettier-plugin-tailwindcss').options} */
const config = {
	bracketSameLine: false,
	importOrder: [
		"^(next/(.*)$)|^(next$)|^(react/(.*)$)|^(react$)",
		"<THIRD_PARTY_MODULES>",
		"^@/(.*)$",
		"^[./]",
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderGroupNamespaceSpecifiers: true,
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
	plugins: [
		"@trivago/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss",
	],
	printWidth: 80,
	quoteProps: "consistent",
	semi: false,
	singleAttributePerLine: true,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,
}

export default config
