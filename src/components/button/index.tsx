import { useState, FC } from "react";

import { color_palette } from "../../constants/colors";

type Props = {
	title: string;
	default_color?: string;
	hover_active_color?: string;
	onClick: Function;
	className?: string;
	disabled?: boolean;
	width?: string;
	dark_text?: boolean;
};

const Button: FC<Props> = ({
	title,
	default_color,
	hover_active_color,
	onClick,
	className,
	disabled = false,
	width = "220px",
	dark_text = true,
}) => {
	const [style, set_style] = useState<{
		border: string;
		color: string;
		backgroundColor?: string;
	}>({
		border: `2px solid ${default_color ?? color_palette["bbb-white"]}`,
		color: default_color ?? color_palette["bbb-white"],
	});

	const class_style: string =
		className ??
		"border-2 rounded-lg border-bbb-white h-8 m-0 p-0 font-medium text-bbb-white hover:cursor-pointer";

	return (
		<button
			className={class_style}
			onClick={() => onClick()}
			disabled={disabled}
			style={
				disabled
					? {
							border: `2px solid ${color_palette["dark-gray"]}`,
							color: color_palette["dark-gray"],
							width: width,
					  }
					: { ...style, width: width }
			}
			onMouseOver={() =>
				set_style({
					border: `2px solid ${hover_active_color ?? color_palette["light-green"]}`,
					color: color_palette[dark_text ? "bbb-black" : "bbb-white"],
					backgroundColor: hover_active_color ?? color_palette["light-green"],
				})
			}
			onMouseLeave={() =>
				set_style({
					border: `2px solid ${default_color ?? color_palette["bbb-white"]}`,
					color: color_palette["bbb-white"],
					backgroundColor: undefined,
				})
			}
		>
			{title}
		</button>
	);
};

export default Button;
