/* PLUGINS */
import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

/* COMPONENTS */
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

/* ASSETS */
import logo from "../assets/logo.webp";

const NavBar = () => {
	return (
		<HStack padding="10px">
			<Link to="/">
				<Image src={logo} boxSize={"60px"} objectFit={"cover"} />
			</Link>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
