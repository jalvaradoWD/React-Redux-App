import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";

import { getCoins } from "./redux/actions/coins.action";

const App = () => {
	const dispatch = useDispatch();

	const coins = useSelector((state) => state.coins);

	useEffect(() => {
		// Self executing function to load the coins in the Redux state.
		(async () => {
			dispatch(await getCoins());
		})();
	}, []);

	return (
		<>
			<Router>
				<h1>Coinranking API</h1>
				{coins.map((coin) => (
					<p>{coin.name}</p>
				))}
			</Router>
		</>
	);
};

export default App;
