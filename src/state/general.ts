import { create } from "zustand";

import { classic_menu_items } from "../constants/classic";
import { exclusive_menu_items } from "../constants/exclusive";

import { NavItemProps } from "../types/common";

export enum GameMenuTypes {
	Classic = "classic",
	Exclusive = "exclusive",
	None = "none",
}

type UseGeneral = {
	loading: boolean;
	game_set: GameMenuTypes;
	game_menu_items: Array<NavItemProps> | undefined;

	set_game_menu_items: (game_set: GameMenuTypes) => void;
	set_loading: (loading: boolean) => void;
};

export const useGeneral = create<UseGeneral>((set) => ({
	loading: false,
	game_set: GameMenuTypes.None,
	game_menu_items: undefined,

	set_game_menu_items: (game_set: GameMenuTypes) => {
		let updated_game_menu_items: Array<NavItemProps> | undefined = undefined;

		if (game_set === GameMenuTypes.Classic) updated_game_menu_items = classic_menu_items;
		else if (game_set === GameMenuTypes.Exclusive)
			updated_game_menu_items = exclusive_menu_items;

		set({ game_menu_items: updated_game_menu_items, game_set: game_set });
	},
	set_loading: (loading: boolean) => set({ loading }),
}));
