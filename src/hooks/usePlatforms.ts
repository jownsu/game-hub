/* PLUGINS */
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ms from "ms";

/* ENTITIES */
import Platform from "../entities/Platform";

/* API */
import APIClient, { FetchResponse } from "../services/apiClient";

/* DATA */
import platforms from "../data/platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
	useQuery<FetchResponse<Platform>, AxiosError>({
		queryKey: ["platforms"],
		queryFn: apiClient.getAll,
		staleTime: ms("24h"),
		initialData: platforms
	});

export default usePlatforms;
