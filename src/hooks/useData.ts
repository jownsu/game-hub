import { useState, useEffect } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../services/api-client";

export interface FetchResponse<Type> {
	count: number;
	results: Type[];
}

const useData = <Type>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	deps?: any[]
) => {
	const [data, setData] = useState<Type[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(
		() => {
			const controller = new AbortController();

			setIsLoading(true);
			apiClient
				.get<FetchResponse<Type>>(endpoint, {
					signal: controller.signal,
					...requestConfig
				})
				.then((res) => {
					setData(res.data.results);
					setIsLoading(false);
				})
				.catch((err) => {
					if (err instanceof CanceledError) return;
					setError(err.message);
					setIsLoading(false);
				});

			return () => controller.abort();
		},
		deps ? [...deps] : []
	);

	return {
		data,
		error,
		isLoading
	};
};

export default useData;
