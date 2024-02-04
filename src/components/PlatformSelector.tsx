import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
	const { data, isLoading, error } = usePlatforms();

	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{isLoading ? <Spinner /> : selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{data.map((platform) => (
					<MenuItem
						onClick={() => onSelectPlatform(platform)}
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
