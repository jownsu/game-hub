import { useQuery } from "@tanstack/react-query";
import genreService, { Genre } from "../services/genreService";
import { FetchResponse } from "../services/apiClient";
import { AxiosError } from "axios";

import genres from "../data/genre";

const useGenres = () => {
	return useQuery<FetchResponse<Genre>, AxiosError>({
		queryKey: ["genres"],
		queryFn: genreService.getAll,
		staleTime: 24 * 60 * 60 * 1000 /* 24h */,
		initialData: genres
	});
};

export default useGenres;
