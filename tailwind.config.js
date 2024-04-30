/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"bbb-white": "#EAEAEA",
				"bbb-black": "#242424",
				"dark-gray": "#383838",
				"absolute-black": "#000000",
				"dark-nexus": "#1A1A1A",
				"vibrant-green": "#39FF14",
				"vibrant-pink": "#FF3AF8",
				"golden-glow": "#FFD700",
				"light-yellow": "#FCEEA1",
				"light-gray": "#E8E8E8",
				"medium-gray": "#8D8D8D",
				"light-green": "#AEF9A1",
				"dark-green": "#2ABE12",
				"very-dark-green": "#062201",
				"dark-pink": "#280015",
				"light-blue": "#BCEAFF",
				"light-pink": "#FFC4E5",
				"dark-yellow": "#635400",
				"vibrant-blue": "#008DCE",
				"dark-blue": "#00273A",
				"medium-red": "#FF2E2E",
			},
			fontFamily: {
				"logo-family": ["AudioWide", "sans-serif"],
				"header-family": ["Orbitron", "sans-serif"],
			},
			fontSize: {
				regular: "16px",
				"sm-header": "20px",
				"md-header": "28px",
				"lg-header": "40px",
				"special-letter": "70px",
			},
			boxShadow: {
				"message-modal": "0 0 20px #000000",
				"bg-inner": "inset 0 0 10px #000000",
				"thinner-golden-glow": "inset 0 0 5px #FFD700, 0 0 5px #FFD700",
				"thinner-green-glow": "inset 0 0 5px #39FF14, 0 0 5px #39FF14",
				"heavy-main-menu-glow":
					"15px 5px 40px #FFD700, -15px -5px 40px #39FF14, inset 5px 5px 15px #39FF14, inset -5px -5px 15px #FFD700, 0 0 20px #EAEAEA, inset 0 0 10px #EAEAEA",
				"choose-game-glow":
					"5px 5px 20px #FFD700, -5px -5px 20px #39FF14, inset 2px 2px 15px #39FF14, inset -2px -2px 15px #FFD700, 0 0 10px #EAEAEA, inset 0 0 5px #EAEAEA",
				"coin-flip-game-glow":
					"5px 5px 20px #39FF14, -5px -5px 20px #FF3AF8, inset 2px 2px 15px #FF3AF8, inset -2px -2px 15px #39FF14, 0 0 10px #EAEAEA, inset 0 0 10px #EAEAEA",
				"space-trail-game-glow":
					"5px 5px 20px #FF3AF8, -5px -5px 20px #008DCE, inset 2px 2px 15px #008DCE, inset -2px -2px 15px #FF3AF8, 0 0 10px #EAEAEA, inset 0 0 5px #EAEAEA",
				"white-card-glow": "inset 0 0 15px #EAEAEA, 0 0 25px #EAEAEA",
				"green-card-glow":
					"inset 0 0 15px #39FF14, 0 0 25px #39FF14, inset 0 0 15px #EAEAEA, 0 0 25px #EAEAEA",
				"yellow-card-glow":
					"inset 0 0 15px #FFD700, 0 0 25px #FFD700, inset 0 0 15px #EAEAEA, 0 0 25px #EAEAEA",
				"pink-card-glow":
					"inset 0 0 15px #FF3AF8, 0 0 25px #FF3AF8, inset 0 0 15px #EAEAEA, 0 0 25px #EAEAEA",
				"blue-card-glow":
					"inset 0 0 15px #008DCE, 0 0 25px #008DCE, inset 0 0 15px #EAEAEA, 0 0 25px #EAEAEA",
				"white-main-menu-glow":
					"5px 5px 20px #FFD700, -5px -5px 20px #39FF14, inset 2px 2px 15px #39FF14, inset -2px -2px 15px #FFD700, 0 0 10px #EAEAEA, inset 0 0 5px #EAEAEA",
				"white-menu-item-glow": "inset 0 0 10px #EAEAEA, 0 0 10px #EAEAEA",
				"green-menu-item-glow": "inset 0 0 10px #39FF14, 0 0 10px #39FF14",
				"yellow-menu-item-glow": "inset 0 0 10px #FFD700, 0 0 10px #FFD700",
				"pink-menu-item-glow": "inset 0 0 10px #FF3AF8, 0 0 10px #FF3AF8",
				"blue-menu-item-glow": "inset 0 0 10px #008DCE, 0 0 10px #008DCE",
			},
			textShadow: {
				"green-glow": "0 0 15px #39FF14",
				"pink-glow": "0 0 15px #FF3AF8",
				"yellow-glow": "0 0 15px #FFD700",
				"white-glow": "0 0 15px #EAEAEA",
				"blue-glow": "0 0 15px #008DCE",
				"red-glow": "0 0 15px #FF2E2E",
			},
		},
	},
	plugins: [require("tailwindcss-textshadow")],
};
