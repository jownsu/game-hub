import { Heading, Spinner, Text } from "@chakra-ui/react";

import useGameDetails from "../hooks/useGameDetails";
import { useParams } from "react-router-dom";

const GameDetails = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGameDetails(slug!);

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;

	return (
		<>
			<Heading>{game.name}</Heading>
			<Text>{game.description_raw}</Text>
		</>
	);
};

export default GameDetails;
