import { CSSProperties, ChangeEvent, FC, TouchEvent, useState, UIEvent, WheelEvent } from "react";
import { color_palette } from "../../constants/colors";

type Props = {
	className?: string;
	disabled?: boolean;
	placeholder?: string;
	default_color: string;
	shadow_color: string;
	style?: CSSProperties;
	value?: string;
	onChange: (value: string) => void;
};

const Input: FC<Props> = ({
	className,
	disabled = false,
	placeholder = "",
	default_color,
	shadow_color,
	style,
	value,
	onChange,
}) => {
	const [color_style, set_color_style] = useState<CSSProperties>({
		border: `2px solid ${default_color}`,
	});

	document.addEventListener("wheel", (event: globalThis.WheelEvent) => event.preventDefault(), {
		passive: false,
	});
	document.addEventListener(
		"touchmove",
		(event: globalThis.TouchEvent) => event.preventDefault(),
		{
			passive: false,
		}
	);

	const class_style: string =
		className ??
		"w-full h-full rounded-md bg-transparent text-bbb-white px-2 focus:outline-none touch-none";

	return (
		<input
			value={value}
			type={"number"}
			className={class_style}
			disabled={disabled}
			placeholder={placeholder}
			style={disabled ? { border: `2px solid ${color_palette["dark-gray"]}` } : color_style}
			onChange={(event: ChangeEvent<HTMLInputElement>) =>
				!disabled && onChange(event.target.value)
			}
			onMouseOver={() => {
				!disabled &&
					set_color_style({
						border: `2px solid ${default_color}`,
						boxShadow: `inset 0 0 10px ${shadow_color}, 0 0 10px ${shadow_color}`,
					});
			}}
			onMouseLeave={() => {
				!disabled &&
					set_color_style({
						border: `2px solid ${default_color}`,
						boxShadow: "none",
					});
			}}
		/>
	);
};

export default Input;
