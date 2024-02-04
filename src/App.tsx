/* REACT */
import { useState } from "react";

/* PLUGINS */
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

/* COMPONENTS */
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";

/* HOOKS */
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr"
			}}
		>
			<GridItem area="nav">
				<NavBar />
			</GridItem>

			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList
						onSelectGenre={(genre) =>
							setGameQuery((prevState) => ({ ...prevState, genre }))
						}
						selectedGenre={gameQuery.genre}
					/>
				</GridItem>
			</Show>

			<GridItem area="main">
				<HStack spacing={5} paddingLeft={2} marginBottom={5}>
					<PlatformSelector
						onSelectPlatform={(platform) =>
							setGameQuery((prevState) => ({ ...prevState, platform }))
						}
						selectedPlatform={gameQuery.platform}
					/>
					<SortSelector />
				</HStack>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
