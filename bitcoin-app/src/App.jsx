import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CoinList from "./components/CoinList";

import AppStyles from "./styles/app.styles";

const App = () => {
	return (
		<>
			<Router>
				<AppStyles>
					<h1>Coinranking API</h1>
					<CoinList />
				</AppStyles>
			</Router>
		</>
	);
};

export default App;
