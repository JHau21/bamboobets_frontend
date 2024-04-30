import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import ExclusiveHome from "../../pages/exclusive";
import Menu from "../../partials/menu";
import PageNotFound from "../../partials/404";
import SpaceTrail from "../../pages/exclusive/space_trail";

import { GameMenuTypes, useGeneral } from "../../state/general";

const ExclusiveRouting = () => {
	const { game_set, set_game_menu_items } = useGeneral();

	useEffect(() => {
		if (game_set !== GameMenuTypes.Exclusive) set_game_menu_items(GameMenuTypes.Exclusive);
	}, []);

	return (
		<Routes>
			<Route path="/" element={<Menu />}>
				<Route index element={<Navigate to="/exclusive/home" />} />
				<Route path="home" element={<ExclusiveHome />} />
				<Route path="space_trail" element={<SpaceTrail />} />
			</Route>
			<Route path="/*" element={<PageNotFound />} />
		</Routes>
	);
};

export default ExclusiveRouting;
