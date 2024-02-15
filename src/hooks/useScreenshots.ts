/* PLUGINS */
import { useQuery } from "@tanstack/react-query";

/* API */
import APIClient from "../services/apiClient";

/* ENTITIES */
import Screenshot from "../entities/Screenshot";

const useScreenshots = (gameId: number) => {
	const apiClient = new APIClient<Screenshot>(`games/${gameId}/screenshots`);

	return useQuery({
		queryKey: ["screenshots", gameId],
		queryFn: apiClient.getAll
	});
};

export default useScreenshots;
