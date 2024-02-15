/* REACT */
import { useRef } from "react";

/* HOOKS */
import useGameQuery from "../store";

/* PLUGINS */
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
	const setGameQuery = useGameQuery((state) => state.setGameQuery);
	const ref = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) setGameQuery("searchText", ref.current.value);
				navigate("/");
			}}
		>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input
					ref={ref}
					borderRadius={20}
					placeholder="Search games..."
					variant={"filled"}
				/>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
