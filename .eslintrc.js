module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true,
	},
	'parser': '@typescript-eslint/parser',
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
	    // 'project': './tsconfig.json',
	},
	'rules': {
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'no-console': 0,
		'no-unused-vars': 1,
		'no-empty': 1,
		'no-unreachable': 1,
		'no-constant-condition': 1,
		'no-implicit-globals': 1,
		'no-throw-literal': 1,
		'prefer-promise-reject-errors': 1,
		'no-extra-bind': 1,
		'require-atomic-updates': 1,
		'no-template-curly-in-string': 1,
		'no-prototype-builtins': 1,
		'no-misleading-character-class': 1,
		'no-await-in-loop': 1,
		'no-async-promise-executor': 1,
		'no-var': 1,
		'prefer-rest-params': 1,
		'prefer-destructuring': 1,
		'no-useless-call': 1,
		'prefer-spread': 1,
		'no-multi-spaces': 1,
		'no-trailing-spaces': 1,
		'prettier/prettier': 1,
		'no-use-before-define': 'off',
    	'@typescript-eslint/no-use-before-define': 'off',
		'eqeqeq': 1,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/no-empty-function': 1,
		'@typescript-eslint/ban-ts-ignore': 0,
	}
}
