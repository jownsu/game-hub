import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

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
			<ExpandableText>{game.description_raw}</ExpandableText>
		</>
	);
};

export default GameDetails;
