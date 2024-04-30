import { color_palette, shadow_palette, text_shadow_palette } from "./colors";

import { PlatformOption } from "../types/common";

import DefaultExclusiveIMG from "../assets/images/icons/exclusive-default.svg";
import DefaultClassicIMG from "../assets/images/icons/classic-default.svg";
import HoverExclusiveIMG from "../assets/images/icons/exclusive-hover.svg";
import HoverClassicIMG from "../assets/images/icons/classic-hover.svg";

export const platform_options: Array<PlatformOption> = [
	{
		title: "Classic Games",
		img_src_default: DefaultClassicIMG,
		img_src_hover: HoverClassicIMG,
		url: "/classic",
		color: color_palette["light-green"],
		shadow: shadow_palette["green-card-glow"],
		text_shadow: text_shadow_palette["green-glow"],
	},
	{
		title: "Exclusive Games",
		img_src_default: DefaultExclusiveIMG,
		img_src_hover: HoverExclusiveIMG,
		url: "/exclusive",
		color: color_palette["light-yellow"],
		shadow: shadow_palette["yellow-card-glow"],
		text_shadow: text_shadow_palette["yellow-glow"],
	},
];
