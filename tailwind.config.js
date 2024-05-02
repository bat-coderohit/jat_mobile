/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#030303',
				base: '#f0f0f0',
				btnBase: '#f40403',
				white: '#fff',
			},
		},
		fontFamily: {
			montserrat: ['Montserrat'],
		},
	},
	plugins: [],
};
