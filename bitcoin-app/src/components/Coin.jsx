import React from "react";

import CoinStyles from "../styles/coin.styles";

const Coin = (props) => {
	const { name, iconUrl: icon, price, color } = props.coin;

	return (
		<CoinStyles color={color}>
			<h3 className="crypto-name">{name}</h3>
			<img className="crypto-img" src={icon} alt={`${name} Logo`} />
			<p className="crypto-price">
				Price: <span>${Number(price).toFixed(2)}</span>
			</p>
		</CoinStyles>
	);
};

export default Coin;
