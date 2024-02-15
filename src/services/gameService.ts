import APIClient from "./apiClient";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}
export interface Game {
	id: number;
	name: string;
	slug: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

export interface GameDetails {
	id: number;
	name: string;
	description_raw: string;
}

export default new APIClient<Game>("/games");
