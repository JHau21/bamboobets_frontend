import { FC, useState } from "react";
import { Location, NavigateFunction, useLocation, useNavigate } from "react-router-dom";

import { color_palette } from "../../../../../../constants/colors";

import { NavItemProps } from "../../../../../../types/common";

const NavBarItem: FC<NavItemProps & { key: number }> = ({
	title,
	color,
	url,
	shadow,
	text_shadow,
	key,
}) => {
	const location: Location = useLocation();
	const navigate: NavigateFunction = useNavigate();

	const [hover, set_hover] = useState<boolean>(false);

	return (
		<div
			className="w-[92%] h-[30px] flex items-center justify-center rounded-md mb-2 px-2 hover:cursor-pointer"
			onMouseOver={() => set_hover(true)}
			onMouseLeave={() => set_hover(false)}
			style={
				hover || location.pathname === url
					? {
							color: color,
							textShadow: hover ? text_shadow : "none",
							boxShadow: hover ? shadow : "none",
							border: `2px solid ${hover ? color_palette["bbb-white"] : color}`,
					  }
					: {
							color: color_palette["bbb-white"],
							textShadow: "none",
							boxShadow: "none",
							border: `2px solid ${color_palette["dark-nexus"]}`,
					  }
			}
			onClick={() => navigate(url)}
			key={key}
		>
			<span className="font-thin text-regular w-full h-full flex flex-row items-center truncate">
				{title}
			</span>
		</div>
	);
};

export default NavBarItem;
