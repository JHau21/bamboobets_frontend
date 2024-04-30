import { FC } from "react";

import { space_trail_menu } from "../../../../../constants/exclusive";

import { SpaceTrailMenuOption, SpaceTrailOptions } from "../../../../../types/common";

import { color_palette } from "../../../../../constants/colors";

import DecisionImage from "../../../../../assets/images/space_trail/decision_image.png";

const MenuScreen: FC<{ choice: SpaceTrailOptions | undefined; set_choice: Function }> = ({
	choice,
	set_choice,
}) => {
	return (
		<div className="w-full h-[90%] rounded-lg bg-dark-nexus flex flex-row items-center text-bbb-white justify-between">
			<div className="flex flex-col items-start w-[50%] h-full px-1 py-2">
				<h3 className="font-thin text-light-blue text-shadow-blue-glow w-full text-sm-header">
					Your Options
				</h3>
				<div className="flex flex-col items-start w-full">
					{space_trail_menu.map(
						(
							{
								title,
								probability,
								payout,
								default_style,
								hover_active_style,
								value,
							}: SpaceTrailMenuOption,
							idx: number
						) => {
							return (
								<p
									className={
										choice === value ? hover_active_style : default_style
									}
									onClick={() => set_choice(value)}
									key={idx}
								>
									{title + ": "}{" "}
									<b>{`[${probability} chance | ${payout} payout] `}</b>
								</p>
							);
						}
					)}
				</div>
			</div>
			<div className="flex flex-col items-start w-[45%] h-full relative">
				<div
					className="absolute w-full h-full"
					style={{
						backgroundImage: `radial-gradient(circle at center, transparent, ${color_palette["dark-nexus"]})`,
					}}
				></div>
				<img className={"h-full w-full"} src={DecisionImage} alt={""} />
			</div>
		</div>
	);
};

export default MenuScreen;
