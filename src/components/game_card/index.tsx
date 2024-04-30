import { useState, FC } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";

import { color_palette } from "../../constants/colors";

import { PlatformOption } from "../../types/common";

const GameCard: FC<PlatformOption & { key: number }> = ({
	title,
	img_src_default,
	img_src_hover,
	url,
	color,
	shadow,
	text_shadow,
	key,
}) => {
	const navigate: NavigateFunction = useNavigate();

	const [hover, set_hover] = useState<boolean>(false);

	return (
		<div
			className={
				"flex flex-col items-center p-[14px] justify-between rounded-lg h-[250px] w-[250px] relative hover:cursor-pointer backdrop-blur-xl"
			}
			onClick={() => navigate(url)}
			onMouseEnter={() => set_hover(true)}
			onMouseLeave={() => set_hover(false)}
			style={
				hover
					? {
							border: `2px solid ${color_palette["bbb-white"]}`,
							color: color,
							boxShadow: shadow,
					  }
					: {
							border: `2px solid ${color_palette["bbb-white"]}`,
							color: color,
					  }
			}
			key={key}
		>
			<h3
				className="text-sm-header font-header-family absolute top-[-20px] px-4 rounded-lg z-10"
				style={
					hover
						? {
								color: color_palette["absolute-black"],
								textShadow: text_shadow,
						  }
						: {
								backgroundColor: color_palette["dark-nexus"],
								color: color_palette["bbb-white"],
								textShadow: "none",
						  }
				}
			>
				{title}
			</h3>
			<img
				alt={`${title} Card`}
				src={hover ? img_src_hover : img_src_default}
				className="w-[70%] h-[75%] rounded-lg mt-12 z-20"
			/>
		</div>
	);
};

export default GameCard;
