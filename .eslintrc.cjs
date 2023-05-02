module.exports = {
  //root: true - 파일의 가장 상위 경로에서 ESLint 규칙을 적용합니다.
  root: true,
  //parser: '@typescript-eslint/parser' - TypeScript 코드를 파싱하는 파서입니다.
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
  },
  //extends: [ ... ] - 적용할 추가 규칙의 목록입니다. 규칙은 airbnb-typescript/base, @typescript-eslint/recommended, eslint-comments/recommended, import/recommended, promise/recommended, prettier 순으로 적용됩니다.
  //"airbnb-typescript/base" 는 Airbnb 개발 팀에서 제공하는 TypeScript용 ESLint 규칙의 집합이며, 개발 팀의 코딩 스타일 가이드에 맞게 코드를 검사할 수 있게 해줍니다. 즉, "airbnb-typescript/base"는 개발 프로젝트에서 코딩 스타일을 Airbnb 개발 팀에서 제시한 코딩 스타일 가이드에 맞게 코드를 작성하도록 강제합니다.
  
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
	'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  //parserOptions: { ... } - 파서 옵션입니다. 프로젝트의 tsconfig.json 파일과 추가 파일 확장자(.svelte)를 고려하고, 모듈 타입으로 소스 코드를 처리하며, ECMAScript 버전은 2020입니다.
	parserOptions: {
    project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		extraFileExtensions: ['.svelte'],
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	//plugins: [ ... ] - 적용할 플러그인 목록입니다. svelte3, @typescript-eslint, eslint-plugin-tsdoc, prettier, import 플러그인이 적용됩니다.
  plugins: ['svelte3', '@typescript-eslint', 'eslint-plugin-tsdoc', 'prettier', 'import',],
  // 적용할 규칙 목록입니다. 규칙으로는 semi, no-console, tsdoc/syntax, import/no-extraneous-dependencies, import/prefer-default-export, import/no-mutable-exports, no-labels, no-restricted-syntax, @typescript-eslint/no-var-requires, @typescript-eslint/no-unused-vars, no-unused-vars, @typescript-eslint/no-infer
	rules: {
		semi: ['error', 'always'],
		'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
		'tsdoc/syntax': 'warn',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'import/prefer-default-export': 0,
		'import/no-mutable-exports': 0,
		'no-labels': 0,
		'no-restricted-syntax': 0,
		'@typescript-eslint/no-var-requires': 'warn',
		'@typescript-eslint/no-unused-vars': [
			2,
			{
				args: 'none',
			},
		],
		'no-unused-vars': 'warn',
    "@typescript-eslint/no-inferrable-types": "off",
	"@typescript-eslint/no-unsafe-assignment": "off",
	"@typescript-eslint/no-shadow": "off",
	"@typescript-eslint/no-floating-promises": "off",
	"@typescript-eslint/no-unsafe-member-access": "off",
	"@typescript-eslint/restrict-template-expressions": "off",
	"@typescript-eslint/no-unsafe-argument": "off"
	},
  ignorePatterns: ['build/*', 'node_modules/*','.eslintrc.cjs'],
	overrides: [
		{
			files: ['**/*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
  settings: {
    'svelte3/typescript': () => require('typescript'), 
		'svelte3/ignore-styles': () => true,
		'import/extensions': ['.js', '.ts'],
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts', '.svelte'],
				moduleDirectory: ['node_modules', 'src/'],
			},
			typescript: {},
		},
	},
};
