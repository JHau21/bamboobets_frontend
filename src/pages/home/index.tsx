import { FC } from "react";

import BBBMenu from "./components/menu";
import BBBTitle from "./components/title";

const Home: FC<{}> = () => {
	return (
		<div className="relative h-full w-full items-center justify-center flex overflow-hidden bg-dark-nexus">
			<div className="h-[500px] w-[700px] rounded-xl relative border-bbb-white border-2 shadow-heavy-main-menu-glow">
				<BBBTitle />
				<BBBMenu />
			</div>
		</div>
	);
};

export default Home;
