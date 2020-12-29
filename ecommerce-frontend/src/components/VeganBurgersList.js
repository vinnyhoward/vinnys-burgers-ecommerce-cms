import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const VeganBurgerGridStyles = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 4rem;
	grid-auto-rows: auto auto 500px;
`;

const VeganBurgerStyles = styled.div`
	display: grid;
	@supports not (grid-template-rows: subgrid) {
		--rows: auto auto 1fr;
	}
	grid-template-rows: var(--rows, subgrid);
	grid-row: span 3;
	grid-gap: 1rem;
	h2,
	p {
		margin: 0;
	}
`;

function SingleVeganBurger({ burger: { slug, name, image, toppings } }) {
	return (
		<VeganBurgerStyles>
			<Link to={`/vegan-burger/${slug.current}`}>
				<h2>
					<span className="mark">{name}</span>
				</h2>
			</Link>
			<p>{toppings.map((topping) => topping.name).join(', ')}</p>
			<Img fluid={image.asset.fluid} alt={name} />
		</VeganBurgerStyles>
	);
}

export default function VeganBurgersList({ veganBurgers }) {
	const renderVeganBurgers = () =>
		veganBurgers.map((burger) => (
			<SingleVeganBurger key={burger.id} {...{ burger }} />
		));
	return <VeganBurgerGridStyles>{renderVeganBurgers()}</VeganBurgerGridStyles>;
}
