/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				// * Add new keys in Common.ts type file
				primary: '#030303',
				base: '#f0f0f0',
				btnBase: '#f40403',
				btnRipple: '#ffcccc',
				white: '#fff',
				inpBorder: 'e4e4e4',
			},
		},
		fontFamily: {
			montserrat: ['Montserrat'],
		},
	},
	plugins: [],
};
