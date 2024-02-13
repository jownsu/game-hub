/* PLUGINS */
import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

/* HOOKS */
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQuery from "../store";

const PlatformSelector = () => {
	const { data, isLoading, error } = usePlatforms();
	const platformId = useGameQuery((state) => state.gameQuery.platformId);
	const setGameQuery = useGameQuery((state) => state.setGameQuery);

	const selectedPlatform = usePlatform(platformId);

	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{isLoading ? <Spinner /> : selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{data?.results.map((platform) => (
					<MenuItem
						onClick={() => setGameQuery("platformId", platform.id)}
						key={platform.id}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
