import { useInfiniteQuery } from "@tanstack/react-query";
import useGameQuery from "../store";
import { Game } from "../entities/Game";
import APIClient, { FetchResponse } from "../services/apiClient";
import { AxiosError } from "axios";
import ms from "ms";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
	const gameQuery = useGameQuery((state) => state.gameQuery);

	return useInfiniteQuery<FetchResponse<Game>, AxiosError>({
		queryKey: ["genre", gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId,
					platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam
				}
			}),
		staleTime: ms("24h"),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		}
	});
};

export default useGames;
