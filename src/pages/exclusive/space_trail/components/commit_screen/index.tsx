import { FC } from "react";

import { outcome_block } from "../../../../../constants/exclusive";

import { SpaceTrailOptions } from "../../../../../types/common";

import { color_palette } from "../../../../../constants/colors";

const CommitChoice: FC<{ choice: SpaceTrailOptions | undefined }> = ({ choice }) => {
	if (choice)
		return (
			<div className="w-full h-[90%] rounded-lg bg-dark-nexus flex flex-row items-center text-bbb-white relative">
				<div className="w-full h-full items-center justify-center flex relative rounded-xl">
					<div
						className="absolute w-[45%] h-full"
						style={{
							backgroundImage: `radial-gradient(circle at center, transparent, ${color_palette["dark-nexus"]})`,
						}}
					></div>
					<img
						className="w-[45%] h-full"
						src={outcome_block[choice].story_image}
						alt={"Interior of Space Ship"}
					/>
				</div>
				<p className="w-full text-center px-6 absolute bottom-4 left-0 bg-dark-nexus rounded-lg font-thin">
					{outcome_block[choice].story_line}
				</p>
			</div>
		);
	else return null;
};

export default CommitChoice;
