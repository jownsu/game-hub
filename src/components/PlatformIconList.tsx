/* PLUGINS */
import { Icon, HStack } from "@chakra-ui/react";
import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

/* ENTITIES */
import Platform from "../entities/Platform";
interface Props {
	platforms: Platform[];
}

const PLATFORM_ICONS: { [key: string]: IconType } = {
	pc: FaWindows,
	playstation: FaPlaystation,
	xbox: FaXbox,
	nintendo: SiNintendo,
	mac: FaApple,
	linux: FaLinux,
	android: FaAndroid,
	ios: MdPhoneIphone,
	web: BsGlobe
};

const PlatformIconList = ({ platforms }: Props) => {
	return (
		<HStack marginY={1}>
			{platforms?.map((platform) => (
				<Icon
					key={platform.slug}
					as={PLATFORM_ICONS[platform.slug]}
					color="gray.500"
				/>
			))}
		</HStack>
	);
};

export default PlatformIconList;
