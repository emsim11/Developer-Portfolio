module.exports = {
	env: {
		browser: true,
		es2020: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'prettier'
	],
	ignorePatterns: [
		'Build',
		'.ESLintRC.cjs',
	],
	parser: '@typescript-eslint/parser',
	plugins: [
		'react-refresh',
	],
	root: true,
	rules: {
		'react-refresh/only-export-components': [
			{ allowConstantExport: true },
			'warn'
		],
	},
}