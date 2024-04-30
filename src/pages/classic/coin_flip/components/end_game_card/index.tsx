import { FC } from "react";

import Button from "../../../../../components/button";
import YouLose from "../../../../../components/lose";
import YouWin from "../../../../../components/win";

import { color_palette } from "../../../../../constants/colors";

const EndGameCard: FC<{ bet_outcome: boolean | undefined; onExit: Function }> = ({
	bet_outcome,
	onExit,
}) => {
	const Outcome: FC<{}> = () => {
		if (bet_outcome) return <YouWin />;
		else return <YouLose />;
	};

	if (typeof bet_outcome !== "undefined")
		return (
			<div className="absolute flex flex-col items-center justify-center w-full h-[105%] bg-dark-nexus bottom-[-5%] left-0">
				<div className="w-full h-[30%]">
					<Outcome />
				</div>
				<p className="h-[10%] text-bbb-white">
					*Please note that your token balance may not accurately update immediately.*
				</p>
				<Button
					title={"Exit"}
					onClick={() => onExit()}
					hover_active_color={color_palette["bbb-white"]}
				/>
			</div>
		);
	else return null;
};

export default EndGameCard;
