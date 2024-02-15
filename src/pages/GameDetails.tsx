import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGameDetails from "../hooks/useGameDetails";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetails = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGameDetails(slug!);

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;

	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
			<GridItem>
				<Heading>{game.name}</Heading>
				<ExpandableText>{game.description_raw}</ExpandableText>
				<GameAttributes game={game} />
			</GridItem>
			<GridItem>
				<GameTrailer gameId={game.id} />
				<GameScreenshots gameId={game.id} />
			</GridItem>
		</SimpleGrid>
	);
};

export default GameDetails;
