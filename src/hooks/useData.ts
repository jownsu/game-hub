import { useState, useEffect } from "react";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

export interface FetchResponse<Type> {
	count: number;
	results: Type[];
}

const useData = <Type>(endpoint: string) => {
	const [data, setData] = useState<Type[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setIsLoading(true);
		apiClient
			.get<FetchResponse<Type>>(endpoint, { signal: controller.signal })
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
	}, []);

	return {
		data,
		error,
		isLoading
	};
};

export default useData;
