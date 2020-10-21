import styled from "styled-components";

export default styled.div`
	display: grid;
	grid-template-areas: "name" "img" "price";
	padding: 0 2rem;

	text-align: center;

	.crypto-name {
		grid-area: name;
	}
	.crypto-img {
		grid-area: img;
		max-width: 250px;
		height: 250px;

		justify-self: center;
	}
	.crypto-price {
		grid-area: price;
		font-size: 1.25rem;

		span {
			font-weight: bold;
		}
	}

	border: 10px solid ${(props) => props.color};
	border-radius: 10px;
`;
