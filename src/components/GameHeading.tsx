/* PLUGINS */
import { Heading } from "@chakra-ui/react";

/* HOOKS  */
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQuery from "../store";

const GameHeading = () => {
	const platformId = useGameQuery((state) => state.gameQuery.platformId);
	const platform = usePlatform(platformId);

	const genreId = useGameQuery((state) => state.gameQuery.genreId);
	const genre = useGenre(genreId);

	const heading = `${platform?.name || ""}  ${genre?.name || ""} Games`;

	return (
		<Heading as={"h1"} marginY={5} fontSize={"5xl"}>
			{heading}
		</Heading>
	);
};

export default GameHeading;
