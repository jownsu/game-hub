import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ms from "ms";
import APIClient from "../services/apiClient";
import { GameDetails } from "../entities/GameDetails";

const apiClient = new APIClient<GameDetails>(`/games`);

const useGameDetails = (slug: string) => {
	return useQuery<GameDetails, AxiosError>({
		queryKey: ["gameDetails", slug],
		queryFn: () => apiClient.get(slug),
		staleTime: ms("24h")
	});
};

export default useGameDetails;
