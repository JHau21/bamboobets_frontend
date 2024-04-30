import { FC } from "react";

import { story_block } from "../../../../../constants/exclusive";

import { color_palette } from "../../../../../constants/colors";

const EventScreens: FC<{ read_event: number }> = ({ read_event }) => {
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
					src={story_block[read_event].story_image}
					alt={"Interior of Space Ship"}
				/>
			</div>
			<p className="w-full text-center px-6 py-1 absolute bottom-4 left-0 bg-dark-nexus rounded-lg font-thin">
				{story_block[read_event].story_line}
			</p>
		</div>
	);
};

export default EventScreens;
