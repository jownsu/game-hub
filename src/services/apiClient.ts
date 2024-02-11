import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "b67562eb462f465caf98487ab59e8d40"
	}
});

export interface FetchResponse<T> {
	count: number;
	next: string | null;
	results: T[];
}

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config?: AxiosRequestConfig) => {
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => res.data);
	};

	post = (data: T) => {
		return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
	};
}

export default APIClient;
