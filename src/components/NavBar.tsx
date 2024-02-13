/* PLUGINS */
import { HStack, Image } from "@chakra-ui/react";

/* COMPONENTS */
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

/* ASSETS */
import logo from "../assets/logo.webp";

const NavBar = () => {
	return (
		<HStack padding="10px">
			<Image src={logo} boxSize={"60px"} />
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
