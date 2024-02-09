/* REACT */
import { Fragment } from "react";

/* PLUGINS */
import { Text, SimpleGrid, Button, Box } from "@chakra-ui/react";

/* HOOKS */
import useGames from "../hooks/useGames";
import { GameQuery } from "../App";

/* COMPONENTS */
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import GameCard from "./GameCard";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data, isLoading, error, fetchNextPage, isFetchingNextPage, hasNextPage } =
		useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<Box padding={"10px"}>
			{error && <Text>{error.message}</Text>}

			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3}>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}

				{data?.pages.map((page, index) => (
					<Fragment key={index}>
						{page?.results?.map((game) => (
							<GameCardContainer key={game.id}>
								<GameCard game={game} />
							</GameCardContainer>
						))}
					</Fragment>
				))}
			</SimpleGrid>

			{hasNextPage && (
				<Button onClick={() => fetchNextPage()} marginY={5} disabled={isLoading}>
					{isFetchingNextPage ? "Loading..." : "Load More"}
				</Button>
			)}
		</Box>
	);
};

export default GameGrid;
