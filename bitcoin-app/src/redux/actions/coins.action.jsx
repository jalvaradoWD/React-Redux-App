import axios from "axios";
import { get_coin } from "../types";

export const getCoins = async () => {
	const res = await axios.get("https://api.coinranking.com/v1/public/coins");

	return {
		type: get_coin,
		payload: [...res.data.data.coins],
	};
};
