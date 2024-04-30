import { FC } from "react";

const YouLose: FC<{}> = () => {
	return (
		<h1 className="w-full h-full flex items-center justify-center text-special-letter font-medium text-bbb-white text-shadow-red-glow">
			You Lose.{" "}
		</h1>
	);
};

export default YouLose;
