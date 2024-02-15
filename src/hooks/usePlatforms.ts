import { useQuery } from "@tanstack/react-query";
import { Platform } from "../entities/Platform";
import APIClient, { FetchResponse } from "../services/apiClient";
import { AxiosError } from "axios";
import platforms from "../data/platform";
import ms from "ms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
	useQuery<FetchResponse<Platform>, AxiosError>({
		queryKey: ["platforms"],
		queryFn: apiClient.getAll,
		staleTime: ms("24h"),
		initialData: platforms
	});

export default usePlatforms;
