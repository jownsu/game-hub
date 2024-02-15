/* PLUGINS */
import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";

/* HOOKS */
import useGenres from "../hooks/useGenres";
import useGameQuery from "../store";

/* SERVICES */
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
	const { data: genres, error, isLoading } = useGenres();
	const genreId = useGameQuery((state) => state.gameQuery.genreId);
	const setGameQuery = useGameQuery((state) => state.setGameQuery);

	if (error) return null;
	if (isLoading) return <Spinner />;

	return (
		<List>
			{genres?.results.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>{" "}
						<Button
							onClick={() => setGameQuery("genreId", genre.id)}
							fontSize={"md"}
							variant={"link"}
							textAlign={"left"}
							whiteSpace="normal"
							fontWeight={genre.id === genreId ? "bold" : "normal"}
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
