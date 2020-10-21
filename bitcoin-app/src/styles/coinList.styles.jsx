import styled from "styled-components";

const gapLength = "1rem";

export default styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	row-gap: ${gapLength};
	column-gap: ${gapLength};

	img {
		width: 250px;
	}
`;
