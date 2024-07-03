module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					'@navigation': './src/navigation',
					'@screens': './src/screens',
					'@_types': './src/_types',
					'@utils': './src/utils',
					'@assets': './src/assets',
					'@components': './src/components',
					'@api': './src/api',
					'@debug': './src/debug',
					'@contexts': './src/contexts',
				},
			},
		],
		[
			'module:react-native-dotenv',
			{
				envName: 'APP_ENV',
				moduleName: '@env',
				path: './env/.env',
				safe: false,
				allowUndefined: false,
				verbose: false,
			},
		],
		'nativewind/babel',
	],
};
