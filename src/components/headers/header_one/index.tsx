import { FC } from "react";

type Props = {
	className?: string;
	style?: Object;
	title: string;
};

const HeaderOne: FC<Props> = ({ className, style, title }) => {
	const class_style: string = className ?? "text-lg-header font-bold";

	return (
		<h1 className={class_style} style={style ?? {}}>
			{title}
		</h1>
	);
};

export default HeaderOne;
