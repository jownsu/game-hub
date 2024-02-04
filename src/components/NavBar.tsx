/* PLUGINS */
import { HStack, Image } from "@chakra-ui/react";

/* COMPONENTS */
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

/* ASSETS */
import logo from "../assets/logo.webp";

interface Props {
	onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
	return (
		<HStack padding="10px">
			<Image src={logo} boxSize={"60px"} />
			<SearchInput onSearch={(searchText) => onSearch(searchText)} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
