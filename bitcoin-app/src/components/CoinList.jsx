import React from "react";
import { useSelector } from "react-redux";

import Coin from "./Coin";

import CoinListStyles from "../styles/coinList.styles";
import CoinStyles from "../styles/coin.styles";

const CoinList = () => {
	const coins = useSelector((state) => state.coins);

	return (
		<CoinListStyles>
			{coins.map((coin) => {
				return <Coin key={coin.uuid} coin={coin} />;
			})}
		</CoinListStyles>
	);
};

export default CoinList;
