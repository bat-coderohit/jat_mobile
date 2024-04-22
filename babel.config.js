module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					'@/navigation': './src/navigation',
				},
			},
		],
		'nativewind/babel',
	],
};
