import { FC, useState } from "react";
import { Location, NavigateFunction, Outlet, useLocation, useNavigate } from "react-router-dom";

import Button from "../../components/button";
import HeaderOne from "../../components/headers/header_one";
import LeftNavBar from "./components/left_nav_bar";
import MenuItem from "./components/menu_item";
import MenuWrapper from "./components/menu_wrapper";

import { useWallet } from "../../state/wallet";
import { useGeneral } from "../../state/general";

import { color_palette } from "../../constants/colors";

import { NavItemProps } from "../../types/common";

import HomeDefault from "../../assets/images/icons/home-default.svg";
import HomeHoverActive from "../../assets/images/icons/home-hover-active.svg";

const Menu: FC<{}> = () => {
	const location: Location = useLocation();
	const navigate: NavigateFunction = useNavigate();

	const { wallet_address, connect_wallet } = useWallet();
	const { game_menu_items } = useGeneral();

	const [open_menu, set_open_menu] = useState<boolean>(false);
	const [hover, set_hover] = useState<boolean>(false);

	return (
		<div
			className="w-full h-full relative"
			onClick={() => {
				if (open_menu) set_open_menu(false);
			}}
		>
			<div className="absolute top-0 left-0 w-full h-[80px] z-10 flex justify-center">
				<div className="w-full h-[54px] items-center justify-between rounded-b-[10px] bg-dark-nexus flex flex-row items-center py-[12px] px-6">
					<div className="w-[200px] flex items-center justify-start">
						<img
							className="w-[34px] h-full hover:cursor-pointer border-bbb-white border-2 rounded-md hover:bg-bbb-white p-1"
							src={hover ? HomeHoverActive : HomeDefault}
							alt={"Home Icon"}
							onClick={() => {
								const path: string = location.pathname;

								if (path.includes("classic") && !path.includes("exclusive"))
									navigate("/classic/home");
								else if (path.includes("exclusive") && !path.includes("classic"))
									navigate("/exclusive/home");
							}}
							onMouseOver={() => set_hover(true)}
							onMouseLeave={() => set_hover(false)}
						/>
					</div>
					<div className="h-full w-[700px] rounded-lg px-4 flex flex-row items-center justify-evenly">
						{game_menu_items &&
							game_menu_items.map((menu_item: NavItemProps, idx: number) => (
								<MenuItem {...menu_item} key={idx} />
							))}
					</div>
					{wallet_address ? (
						<div className="h-full w-[200px] flex flew-row items-center justify-end">
							<span className="text-bbb-white truncate w-full">{wallet_address}</span>
						</div>
					) : (
						<div className="h-full w-[200px] flex flew-row items-center justify-end">
							<Button
								hover_active_color={color_palette["bbb-white"]}
								title={"Connect Wallet"}
								onClick={async () => connect_wallet()}
								width={"100%"}
							/>
						</div>
					)}
				</div>
			</div>
			<LeftNavBar />
			<MenuWrapper>
				<Outlet />
			</MenuWrapper>
		</div>
	);
};

export default Menu;
