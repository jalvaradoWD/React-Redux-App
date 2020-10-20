import { get_coin } from "../types";

export default (state = [], action) => {
	const { payload, type } = action;
	switch (type) {
		case get_coin:
			state = [...payload];
			return state;
		default:
			return state;
	}
};
