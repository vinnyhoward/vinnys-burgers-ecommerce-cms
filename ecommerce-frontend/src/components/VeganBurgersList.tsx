// @ts-nocheck
import * as React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import {
	IVeganBurgers,
	IVeganBurgerOrder,
} from '../types/typesVeganBurgerOrder';
import { ITopping } from '../types/typesToppingsFilter';

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

function SingleVeganBurger({ slug, name, image, toppings, id }: IVeganBurgers) {
	const {
		asset: { fluid },
	} = image;
	return (
		<VeganBurgerStyles key={id}>
			<Link to={`/vegan-burger/${slug?.current}`}>
				<h2>
					<span className="mark">{name}</span>
				</h2>
			</Link>
			<p>{toppings?.map((topping: ITopping) => topping?.name).join(', ')}</p>
			<Img {...{ fluid }} alt={name} />
		</VeganBurgerStyles>
	);
}

const VeganBurgersList = ({ veganBurgers }: IVeganBurgerOrder) => {
	const renderVeganBurgers = () =>
		veganBurgers?.map((burger: IVeganBurgers) => {
			const { slug, name, image, toppings, id } = burger;
			return (
				<SingleVeganBurger
					key={burger.id}
					{...{ slug, name, image, toppings, id }}
				/>
			);
		});
	return <VeganBurgerGridStyles>{renderVeganBurgers()}</VeganBurgerGridStyles>;
};

export default VeganBurgersList;
