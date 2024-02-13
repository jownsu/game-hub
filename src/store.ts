import { create } from "zustand";

export interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder: string;
	searchText: string;
}

interface GameQueryStore {
	gameQuery: GameQuery;
	setGameQuery: (
		key: "genreId" | "platformId" | "sortOrder" | "searchText",
		value: string | number
	) => void;
}

const useGameQuery = create<GameQueryStore>((set) => ({
	gameQuery: {} as GameQuery,
	setGameQuery: (key: string, value: string | number) =>
		set((state) => ({
			gameQuery: { ...state.gameQuery, [key]: value }
		}))
}));

export default useGameQuery;
