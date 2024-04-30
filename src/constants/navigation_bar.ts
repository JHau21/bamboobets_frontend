import { NavItemProps, NavSectionProps } from "../types/common";

import { color_palette, shadow_palette, text_shadow_palette } from "./colors";

const general_items: Array<NavItemProps> = [
	{
		title: "Launch Page",
		color: color_palette["bbb-white"],
		url: "/",
		shadow: shadow_palette["white-menu-item-glow"],
		text_shadow: text_shadow_palette["white-glow"],
	},
];

const classic_items: Array<NavItemProps> = [
	{
		title: "Home",
		color: color_palette["light-green"],
		url: "/classic/home",
		shadow: shadow_palette["green-menu-item-glow"],
		text_shadow: text_shadow_palette["green-glow"],
	},
	{
		title: "Coin Flip",
		color: color_palette["light-pink"],
		url: "/classic/coin_flip",
		shadow: shadow_palette["pink-menu-item-glow"],
		text_shadow: text_shadow_palette["pink-glow"],
	},
];

const exclusive_items: Array<NavItemProps> = [
	{
		title: "Home",
		color: color_palette["light-yellow"],
		url: "/exclusive/home",
		shadow: shadow_palette["yellow-menu-item-glow"],
		text_shadow: text_shadow_palette["yellow-glow"],
	},
	{
		title: "Space Trail",
		color: color_palette["light-blue"],
		url: "/exclusive/space_trail",
		shadow: shadow_palette["blue-menu-item-glow"],
		text_shadow: text_shadow_palette["blue-glow"],
	},
];

export const nav_bar_sections: Array<NavSectionProps> = [
	{
		title: "General",
		elements: general_items,
	},
	{
		title: "Classic",
		elements: classic_items,
	},
	{
		title: "Exclusive",
		elements: exclusive_items,
	},
];
