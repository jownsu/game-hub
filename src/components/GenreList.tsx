/* PLUGINS */
import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";

/* HOOKS */
import useGenres from "../hooks/useGenres";
import { Genre } from "../services/genreService";

/* SERVICES */
import getCroppedImageUrl from "../services/image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data: genres, error, isLoading } = useGenres();

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
							onClick={() => onSelectGenre(genre)}
							fontSize={"md"}
							variant={"link"}
							textAlign={"left"}
							whiteSpace="normal"
							fontWeight={
								genre.id === selectedGenre?.id ? "bold" : "normal"
							}
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
