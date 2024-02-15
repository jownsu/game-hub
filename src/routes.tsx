import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import GameDetails from "./pages/GameDetails";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />
			},
			{
				path: "games/:id",
				element: <GameDetails />
			}
		]
	}
]);

export default router;
