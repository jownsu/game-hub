import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ms from "ms";
import APIClient from "../services/apiClient";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>(`/games`);

const useGameDetails = (slug: string) => {
	return useQuery<Game, AxiosError>({
		queryKey: ["gameDetails", slug],
		queryFn: () => apiClient.get(slug),
		staleTime: ms("24h")
	});
};

export default useGameDetails;
