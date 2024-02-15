import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ms from "ms";
import { Genre } from "../entities/Genre";
import APIClient, { FetchResponse } from "../services/apiClient";

import genres from "../data/genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
	return useQuery<FetchResponse<Genre>, AxiosError>({
		queryKey: ["genres"],
		queryFn: apiClient.getAll,
		staleTime: ms("24h"),
		initialData: genres
	});
};

export default useGenres;
