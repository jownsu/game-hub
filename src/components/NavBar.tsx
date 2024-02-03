/* PLUGINS */
import { HStack, Image } from "@chakra-ui/react";

/* COMPONENTS */
import ColorModeSwitch from "./ColorModeSwitch";

/* ASSETS */
import logo from "../assets/logo.webp";

const NavBar = () => {
	return (
		<HStack justifyContent="space-between" padding="10px">
			<Image src={logo} boxSize={"60px"} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
