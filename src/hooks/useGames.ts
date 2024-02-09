import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import gameService, { Game } from "../services/gameService";
import { FetchResponse } from "../services/apiClient";
import { AxiosError } from "axios";

const useGames = (gameQuery: GameQuery) => {
	return useQuery<FetchResponse<Game>, AxiosError>({
		queryKey: ["genre", gameQuery],
		queryFn: () =>
			gameService.getAll({
				params: {
					genres: gameQuery.genre?.id,
					platforms: gameQuery.platform?.id,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText
				}
			}),
		staleTime: 24 * 60 * 60 * 1000 /* 24h */
	});
};

export default useGames;
