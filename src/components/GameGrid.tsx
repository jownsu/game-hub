/* PLUGINS */
import { Text, SimpleGrid } from "@chakra-ui/react";

/* HOOKS */
import GameCard from "./GameCard";

/* COMPONENTS */
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";

const GameGrid = () => {
	const { data, error, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <Text>{error}</Text>}

			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={3}
				padding="10px"
			>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer>
							<GameCardSkeleton key={skeleton} />
						</GameCardContainer>
					))}

				{data.map((game) => (
					<GameCardContainer>
						<GameCard key={game.id} game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;