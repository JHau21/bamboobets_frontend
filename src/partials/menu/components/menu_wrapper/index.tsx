import React, { FC, useEffect, useState } from "react";
import { useLocation, Location } from "react-router-dom";

import { WrapperConfig, wrapper_set } from "../../../../constants/menu_wrapper";

type Props = {
	children: React.ReactElement;
};

const MenuWrapper: FC<Props> = ({ children }) => {
	const location: Location = useLocation();

	const [wrapper_style_config, set_wrapper_style_config] = useState<WrapperConfig>(
		wrapper_set["home"]
	);

	const set_glow_and_title: Function = (): void => {
		const path: string = location.pathname;
		const idx_last_slash: number = path.lastIndexOf("/");
		const page: string = path.substring(idx_last_slash + 1);

		if (wrapper_set[page]) set_wrapper_style_config(wrapper_set[page]);
	};

	useEffect(() => {
		set_glow_and_title();
	}, [location]);

	return (
		<div className="w-full h-full relative bg-dark-nexus">
			<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pt-[80px] pb-[20px]">
				<div
					className="w-[900px] h-[85%] max-h-[600px] rounded-xl flex flex-col items-center p-4 relative border-2 border-bbb-white"
					style={{
						boxShadow: wrapper_style_config.shadow,
						textShadow: wrapper_style_config.text_shadow,
					}}
				>
					<div
						className="absolute top-[-65px] h-[60px] rounded-xl flex flex-row items-center"
						style={{
							color: wrapper_style_config.color,
						}}
					>
						<div className="w-full h-full text-lg-header flex flex-row items-center justify-center overflow-hidden px-6">
							<span className={wrapper_style_config.title_one_style}>
								{wrapper_style_config.title_one}
							</span>{" "}
							<span className={wrapper_style_config.title_two_style}>
								{wrapper_style_config.title_two}
							</span>
						</div>
					</div>
					{children}
				</div>
			</div>
		</div>
	);
};

export default MenuWrapper;
