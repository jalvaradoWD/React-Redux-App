import { get_coin } from "../types";
import coinDummyData from "./coins.dummyData.json";

export default (state = [...coinDummyData.data.coins], action) => {
	const { payload, type } = action;
	switch (type) {
		case get_coin:
			state = [...payload];
			return state;
		default:
			return state;
	}
};
