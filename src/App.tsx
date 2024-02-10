/* REACT */
import { useState } from "react";

/* PLUGINS */
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";

/* COMPONENTS */
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder: string;
	searchText: string;
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
				<NavBar
					onSearch={(searchText) => {
						setGameQuery((prevState) => ({ ...prevState, searchText }));
					}}
				/>
			</GridItem>

			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList
						onSelectGenre={(genre) =>
							setGameQuery((prevState) => ({
								...prevState,
								genreId: genre.id
							}))
						}
						selectedGenreId={gameQuery.genreId}
					/>
				</GridItem>
			</Show>

			<GridItem area="main">
				<Box paddingLeft={2}>
					<GameHeading gameQuery={gameQuery} />
					<HStack spacing={5} marginBottom={5}>
						<PlatformSelector
							onSelectPlatform={(platform) =>
								setGameQuery((prevState) => ({
									...prevState,
									platformId: platform.id
								}))
							}
							selectedPlatformId={gameQuery.platformId}
						/>
						<SortSelector
							onSelectSortOrder={(sortOrder) =>
								setGameQuery((prevState) => ({
									...prevState,
									sortOrder
								}))
							}
							sortOrder={gameQuery.sortOrder}
						/>
					</HStack>
				</Box>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
