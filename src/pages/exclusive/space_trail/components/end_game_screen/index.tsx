import { FC } from "react";

import Button from "../../../../../components/button";

import { outcome_pictures } from "../../../../../constants/exclusive";

import { color_palette } from "../../../../../constants/colors";

import { SpaceTrailOptions } from "../../../../../types/common";

const EndGameCard: FC<{
	bet_outcome: boolean | undefined;
	choice: SpaceTrailOptions | undefined;
	onExit: Function;
}> = ({ bet_outcome, choice, onExit }) => {
	if (typeof bet_outcome !== "undefined" && typeof choice !== "undefined") {
		console.log();
		return (
			<div className="absolute flex flex-col items-center justify-center w-full h-full bg-dark-nexus bottom-0 left-0">
				<div className="w-full h-[90%] items-center justify-center flex relative rounded-xl">
					<div
						className="absolute w-[45%] h-full"
						style={{
							backgroundImage: `radial-gradient(circle at center, transparent, ${color_palette["dark-nexus"]})`,
						}}
					></div>
					<img
						className="w-[45%] h-full"
						src={outcome_pictures[choice?.toString() + Number(bet_outcome).toString()]}
						alt={"Outcome Screen"}
					/>
				</div>
				<p className="w-full text-center px-6 py-1 absolute bottom-12 left-0 bg-dark-nexus rounded-lg text-bbb-white font-thin">
					{bet_outcome
						? "Great idea! The ship and the crew has been saved! Note: you may need to refresh the page to see your funds update."
						: "What a terrible idea. You deserve to lose for choosing something so stupid! Note: you may need to refresh the page to see your funds update."}
				</p>
				<Button
					title={"Exit"}
					hover_active_color={color_palette["light-pink"]}
					onClick={() => onExit()}
				/>
			</div>
		);
	} else return null;
};

export default EndGameCard;
