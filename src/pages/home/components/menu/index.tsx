import { FC } from "react";

import GameCard from "../../../../components/game_card";

import { platform_options } from "../../../../constants/home";

import { PlatformOption } from "../../../../types/common";

const BBBMenu: FC<{}> = () => {
	return (
		<div className="pt-[100px] w-full flex items-center justify-center flex-col">
			<div className="flex flex-row items-center w-[80%] h-[65%] justify-between">
				{platform_options.map((option: PlatformOption, idx: number) => (
					<GameCard {...option} key={idx} />
				))}
			</div>
		</div>
	);
};

export default BBBMenu;
