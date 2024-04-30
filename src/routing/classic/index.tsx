import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import ClassicHome from "../../pages/classic";
import CoinFlip from "../../pages/classic/coin_flip";
import Menu from "../../partials/menu";
import PageNotFound from "../../partials/404";

import { GameMenuTypes, useGeneral } from "../../state/general";

const ClassicRouting = () => {
	const { game_set, set_game_menu_items } = useGeneral();

	useEffect(() => {
		if (game_set !== GameMenuTypes.Classic) set_game_menu_items(GameMenuTypes.Classic);
	}, []);

	return (
		<Routes>
			<Route path="/" element={<Menu />}>
				<Route index element={<Navigate to="/classic/home" />} />
				<Route path="home" element={<ClassicHome />} />
				<Route path="coin_flip" element={<CoinFlip />} />
			</Route>
			<Route path="/*" element={<PageNotFound />} />
		</Routes>
	);
};

export default ClassicRouting;
