/* PLUGINS */
import { Outlet } from "react-router-dom";

/* COMPONENTS */
import NavBar from "../components/NavBar";

const Layout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};

export default Layout;
