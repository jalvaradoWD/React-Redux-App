import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CoinList from "./components/CoinList";

const App = () => {
	return (
		<>
			<Router>
				<h1>Coinranking API</h1>
				<CoinList />
			</Router>
		</>
	);
};

export default App;
