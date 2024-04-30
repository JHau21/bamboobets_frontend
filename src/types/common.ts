export enum CoinOptions {
	Bamboo = "bamboo",
	Flower = "flower",
}

export enum SpaceTrailOptions {
	Collaborate = 1,
	Fix = 2,
	Ignore = 3,
	Panic = 4,
}

export type GlobalContext = {
	games_type: string;
};

export type NavItemProps = {
	title: string;
	color: string;
	url: string;
	shadow: string;
	text_shadow: string;
};

export type NavSectionProps = {
	title: string;
	elements: Array<NavItemProps>;
};

export type PlatformOption = {
	title: string;
	img_src_default: string;
	img_src_hover: string;
	url: string;
	color: string;
	shadow: string;
	text_shadow: string;
};

export type SpaceTrailMenuOption = {
	title: string;
	probability: string;
	payout: string;
	default_style: string;
	hover_active_style: string;
	value: SpaceTrailOptions;
};
