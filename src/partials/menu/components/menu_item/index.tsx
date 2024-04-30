import { FC, useState } from "react";
import { useLocation, Location, useNavigate, NavigateFunction } from "react-router-dom";

import { color_palette } from "../../../../constants/colors";

import { NavItemProps } from "../../../../types/common";

const MenuItem: FC<NavItemProps & { key: number }> = ({
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
			className={
				"w-[100px] h-[30px] flex items-center justify-center rounded-lg hover:cursor-pointer"
			}
			style={
				location.pathname === url || hover
					? {
							color: color,
							border: `2px solid ${color}`,
							boxShadow: hover ? shadow : undefined,
							textShadow: hover ? text_shadow : undefined,
					  }
					: {
							color: color_palette["bbb-white"],
					  }
			}
			onClick={() => navigate(url)}
			onMouseOver={() => set_hover(true)}
			onMouseLeave={() => set_hover(false)}
			key={key}
		>
			<span>{title}</span>
		</div>
	);
};

export default MenuItem;
