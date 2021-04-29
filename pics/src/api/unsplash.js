import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID 1QL-5a91Mq6L1jLBUfInFYM6GbMFOzcMtpKSz2OH46Q",
	},
});
