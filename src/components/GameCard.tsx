/* PLUGINS */
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

/* HOOKS */
import { Game } from "../hooks/useGames";

/* COMPONENTS */
import PlatformIconList from "./PlatformIconList";
import CriticScore from "../components/CriticScore";

/* SERVICES */
import getCroppedImageUrl from "../services/image-url";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<HStack justifyContent={"space-between"} mb={"10px"}>
					<PlatformIconList
						platforms={game.parent_platforms?.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize="2xl">{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
