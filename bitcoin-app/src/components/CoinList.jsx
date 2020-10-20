import React from "react";
import { useSelector } from "react-redux";

import CoinListStyles from "../styles/coinList.styles";
import CoinStyles from "../styles/coin.styles";

const CoinList = () => {
	const coins = useSelector((state) => state.coins);

	return (
		<CoinListStyles>
			{coins.map(({ name, iconUrl: icon, uuid }) => {
				return (
					<CoinStyles key={uuid}>
						<h3>{name}</h3>
						<img src={icon} alt={`${name} Logo`} />
						<p></p>
					</CoinStyles>
				);
			})}
		</CoinListStyles>
	);
};

export default CoinList;
