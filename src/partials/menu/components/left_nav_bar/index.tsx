import { FC, useState } from "react";

import NavBarSection from "./components/nav_bar_section";

import { nav_bar_sections } from "../../../../constants/navigation_bar";
import { color_palette } from "../../../../constants/colors";

import { NavSectionProps } from "../../../../types/common";

import PullOutIcon from "../../../../assets/images/icons/pull-out-icon.svg";

const LeftNavBar: FC<{}> = () => {
	const [hover, set_hover] = useState<boolean>(false);

	return (
		<div
			className="absolute left-0 top-0 h-full z-30 transitional-all duration-500 flex flex-col items-start bg-dark-nexus"
			style={
				hover
					? { width: "250px", borderRight: `2px solid ${color_palette["bbb-white"]}` }
					: { width: "0px" }
			}
			onMouseOver={() => set_hover(true)}
			onMouseLeave={() => set_hover(false)}
		>
			<div className="w-full relative">
				<div className="absolute top-[200px] right-[-30px] h-[60px] w-[30px] rounded-r-lg border-r-2 border-y-2 border-bbb-white bg-dark-nexus flex items-center justify-center">
					<img
						className="rounded-r-md w-[30px] h-[40px]"
						src={PullOutIcon}
						alt={"Menu Bar"}
					/>
				</div>
			</div>
			<div className="w-full h-full flex flex-row items-center px-2">
				<div className="w-[16px]" />
				<div className="w-full h-full flex flex-col items-center ">
					<div className="h-[16px]" />
					<div className="w-full h-[55px] text-md-header flex flex-row items-center overflow-hidden">
						<span className="text-light-green text-shadow-green-glow font-logo-family">
							Bamboo
						</span>
						<span className="text-light-yellow text-shadow-yellow-glow font-logo-family">
							Bets
						</span>
					</div>
					{nav_bar_sections.map((section: NavSectionProps, idx: number) => (
						<NavBarSection {...section} key={idx} />
					))}
					<div className="h-[16px]" />
				</div>
				<div className="w-[16px]" />
			</div>
		</div>
	);
};

export default LeftNavBar;
