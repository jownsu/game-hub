import { useQuery } from "@tanstack/react-query";
import platformService, { Platform } from "../services/platformService";
import { FetchResponse } from "../services/apiClient";
import { AxiosError } from "axios";
import platforms from "../data/platform";
import ms from "ms";

const usePlatforms = () =>
	useQuery<FetchResponse<Platform>, AxiosError>({
		queryKey: ["platforms"],
		queryFn: platformService.getAll,
		staleTime: ms("24h"),
		initialData: platforms
	});

export default usePlatforms;
