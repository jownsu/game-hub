import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "b67562eb462f465caf98487ab59e8d40"
	}
});
