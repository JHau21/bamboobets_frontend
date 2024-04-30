import { FC } from "react";

import GameCard from "../../components/game_card";

import { classic_game_cards } from "../../constants/classic";

import { PlatformOption } from "../../types/common";

const ClassicHome: FC<{}> = () => {
	return (
		<div className="w-full h-full flex flex-row items-center justify-evenly">
			{classic_game_cards.map((game_card: PlatformOption, idx: number) => (
				<GameCard {...game_card} key={idx} />
			))}
		</div>
	);
};

export default ClassicHome;
