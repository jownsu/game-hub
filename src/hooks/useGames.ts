import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import gameService, { Game } from "../services/gameService";
import { FetchResponse } from "../services/apiClient";
import { AxiosError } from "axios";

const useGames = (gameQuery: GameQuery) => {
	return useInfiniteQuery<FetchResponse<Game>, AxiosError>({
		queryKey: ["genre", gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			gameService.getAll({
				params: {
					genres: gameQuery.genre?.id,
					platforms: gameQuery.platform?.id,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam
				}
			}),
		staleTime: 24 * 60 * 60 * 1000 /* 24h */,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		}
	});
};

export default useGames;
