import { color_palette, shadow_palette, text_shadow_palette } from "./colors";

export type WrapperConfig = {
	shadow: string;
	text_shadow: string;
	title_shadow: string;
	color: string;
	title_one: string;
	title_two: string;
	title_one_style: string;
	title_two_style: string;
};

export const wrapper_set: { [key: string]: WrapperConfig } = {
	home: {
		shadow: shadow_palette["choose-game-glow"],
		text_shadow: text_shadow_palette["green-glow"],
		title_shadow: shadow_palette["green-card-glow"],
		color: color_palette["light-green"],
		title_one: "Choose",
		title_two: "Game",
		title_one_style: "text-light-green text-shadow-green-glow font-header-family",
		title_two_style: "text-light-yellow text-shadow-yellow-glow font-header-family",
	},
	coin_flip: {
		shadow: shadow_palette["coin-flip-game-glow"],
		text_shadow: text_shadow_palette["pink-glow"],
		title_shadow: shadow_palette["pink-card-glow"],
		color: color_palette["light-pink"],
		title_one: "Coin",
		title_two: "Flip",
		title_one_style: "text-light-pink text-shadow-pink-glow font-header-family",
		title_two_style: "text-light-green text-shadow-green-glow font-header-family",
	},
	space_trail: {
		shadow: shadow_palette["space-trail-game-glow"],
		text_shadow: text_shadow_palette["blue-glow"],
		title_shadow: shadow_palette["blue-card-glow"],
		color: color_palette["light-blue"],
		title_one: "Space",
		title_two: "Trail",
		title_one_style: "text-light-blue text-shadow-blue-glow font-header-family",
		title_two_style: "text-light-pink text-shadow-pink-glow font-header-family",
	},
};
