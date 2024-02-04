/* PLUGINS */
import { HStack, Image } from "@chakra-ui/react";

/* COMPONENTS */
import ColorModeSwitch from "./ColorModeSwitch";

/* ASSETS */
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

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
