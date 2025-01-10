// tailwind.config.js
export default {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}", // Next.js의 디렉토리에 맞게 조정
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Open Sans"', "sans-serif"],
				poppins: ['"Poppins"', "sans-serif"],
			},
			colors: {
				background: {
					primary: "#232029",
					secondary: "#231e2d",
				},
				text: {
					primary: "#ddd8e4",
					heading: "#ede9f3",
					link: "#f4c33d",
					linkHover: "#bd3df4",
				},
				shadow: "#f6c363",
			},
			boxShadow: {
				custom: "0 0 4px #f6c363",
			},
			backgroundImage: {
				"gradient-primary": "linear-gradient(180deg, #232029, #231e2d)",
			},
		},
	},
	plugins: [],
};
