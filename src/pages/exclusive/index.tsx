import { FC } from "react";

import GameCard from "../../components/game_card";

import { exclusive_game_cards } from "../../constants/exclusive";

import { PlatformOption } from "../../types/common";

const ExclusiveHome: FC<{}> = () => {
	return (
		<div className="w-full h-full flex flex-row items-center justify-evenly">
			{exclusive_game_cards.map((game_card: PlatformOption, idx: number) => (
				<GameCard {...game_card} key={idx} />
			))}
		</div>
	);
};

export default ExclusiveHome;
