import { Route, Routes } from "react-router-dom";

import ExclusiveRouting from "./exclusive";
import Home from "../pages/home";
import PageNotFound from "../partials/404";
import ClassicRouting from "./classic";

const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/exclusive/*" element={<ExclusiveRouting />} />
			<Route path="/classic/*" element={<ClassicRouting />} />
			<Route path="/*" element={<PageNotFound />} />
		</Routes>
	);
};

export default Routing;
