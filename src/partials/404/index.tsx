import { NavigateFunction, useNavigate } from "react-router-dom";
import Button from "../../components/button";

import { color_palette } from "../../constants/colors";

const PageNotFound = () => {
	const navigate: NavigateFunction = useNavigate();

	return (
		<div className="w-full h-full flex items-center justify-center bg-dark-nexus">
			<div className="border-2 border-bbb-white w-[480px] h-[150px] items-center justify-center flex rounded-lg p-4 flex-col">
				<span className="text-lg-header text-bbb-white mb-4">
					<span className="text-light-green font-bold text-shadow-green-glow">404</span> -{" "}
					<span className="text-light-yellow font-thin text-shadow-yellow-glow">
						Page Not Found.
					</span>
				</span>
				<Button
					title={"Launch Page"}
					onClick={() => navigate("/")}
					hover_active_color={color_palette["bbb-white"]}
				/>
			</div>
		</div>
	);
};

export default PageNotFound;
