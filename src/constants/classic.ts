import { color_palette, shadow_palette, text_shadow_palette } from "./colors";

import { NavItemProps, PlatformOption } from "../types/common";

import DefaultCoinFlip from "../assets/images/icons/coin-flip-default.svg";
import HoverActiveCoinFlip from "../assets/images/icons/coin-flip-hover-active.svg";

export const classic_menu_items: Array<NavItemProps> = [
	{
		title: "Coin Flip",
		color: color_palette["light-pink"],
		url: "/classic/coin_flip",
		shadow: shadow_palette["pink-menu-item-glow"],
		text_shadow: text_shadow_palette["pink-glow"],
	},
];

export const classic_game_cards: Array<PlatformOption> = [
	{
		title: "Coin Flip",
		img_src_default: DefaultCoinFlip,
		img_src_hover: HoverActiveCoinFlip,
		url: "/classic/coin_flip",
		color: color_palette["light-pink"],
		shadow: shadow_palette["pink-card-glow"],
		text_shadow: text_shadow_palette["pink-glow"],
	},
];
