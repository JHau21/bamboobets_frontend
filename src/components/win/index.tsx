import { FC } from "react";

const YouWin: FC<{}> = () => {
	return (
		<h1 className="w-full h-full flex items-center justify-center text-special-letter font-medium text-bbb-white text-shadow-green-glow">
			You Win!{" "}
		</h1>
	);
};

export default YouWin;
