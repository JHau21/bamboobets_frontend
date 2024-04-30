import { FC } from "react";
import HeaderOne from "../headers/header_three";

type Props = {
	children: any;
};

const Message: FC<Props> = ({ children }) => {
	return (
		<div className="fixed top-0 left-0 w-full flex justify-center z-50 pt-4">
			<div className="bg-dark-nexus w-[350px] border-2 border-medium-red rounded-md flex flex-col items-center shadow-message-modal p-2">
				<HeaderOne
					className={
						"text-md-header font-bold text-medium-red mb-2 text-shadow-red-glow m-0"
					}
					title={"ERROR"}
				/>
				<p className="text-bbb-white mb-2 text-center">{children}</p>
			</div>
		</div>
	);
};

export default Message;
