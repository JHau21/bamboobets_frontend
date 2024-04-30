import { FC } from "react";

import NavBarItem from "../nav_bar_item";

import { NavItemProps, NavSectionProps } from "../../../../../../types/common";

const NavBarSection: FC<NavSectionProps & { key: number }> = ({ title, elements, key }) => {
	return (
		<div className="w-full flex flex-col items-center overflow-hidden my-1" key={key}>
			<span className="text-sm-header font-medium m-0 text-bbb-white text-start w-full font-header-family">
				{title}
			</span>
			{elements.map((element: NavItemProps, idx: number) => (
				<NavBarItem {...element} key={idx} />
			))}
		</div>
	);
};

export default NavBarSection;
