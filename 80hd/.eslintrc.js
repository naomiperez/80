module.exports = {
	'env': {
		'es6': true,
		'node': true,
		'jest': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'react-hooks',
		'prettier',
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'react/display-name': 'off',
		'prettier/prettier': 'error',
	},
	'settings': {
		'react': {
		'version': 'detect',
		},
	},
	
}
