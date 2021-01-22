import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import {
	IBurgerToppings,
	IBurgerToppingsCount,
	ITopping,
	IBurgerTopping,
} from '../types/typesToppingsFilter';

const ToppingsStyles = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	margin-bottom: 4rem;
	a {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-gap: 0 1rem;
		align-items: center;
		padding: 4px;
		background: var(--grey);
		border-radius: 2px;
		text-decoration: none;
		font-size: clamp(1.5rem, 1.3vw, 6rem);
		.count {
			background: white;
			padding: 12px 5px;
		}
		&[aria-current='page'] {
			background: var(--champaignYellow);
		}
	}
`;

function countBurgersInToppings(burgers: Array<any>): any {
	const toppingsCount: any = burgers
		.map((burger) => burger.toppings)
		.flat()
		.reduce((acc, topping: any) => {
			const existingTopping = acc[topping.id];
			if (existingTopping) existingTopping.count += 1;
			else
				acc[topping.id] = {
					id: topping.id,
					name: topping.name,
					count: 1,
				};
			return acc;
		}, {});

	const toppingsValues: Array<ITopping> = Object.values(toppingsCount);

	return toppingsValues.sort((a, b) => b.count! - a.count!);
}

const ToppingsFilter: React.FunctionComponent<any> = ({ activeTopping }) => {
	const { veganBurgers } = useStaticQuery(graphql`
		query {
			veganBurgers: allSanityVeganBurger {
				nodes {
					toppings {
						name
						id
					}
				}
			}
		}
	`);

	const toppingsWithCounts: Array<any> = countBurgersInToppings(
		veganBurgers.nodes
	);

	const renderToppings = () =>
		toppingsWithCounts.map((topping: any) => (
			<Link
				className={topping.name === activeTopping ? 'active' : ''}
				key={topping.id}
				to={`/topping/${topping.name}`}
			>
				<span className="name">{topping.name}</span>
				<span className="count">{topping.count}</span>
			</Link>
		));

	const renderAllTag = () => (
		<Link to="/vegan-burgers">
			<span className="name">All</span>
			<span className="count">{veganBurgers.nodes.length}</span>
		</Link>
	);

	return (
		<ToppingsStyles>
			{renderAllTag()}
			{renderToppings()}
		</ToppingsStyles>
	);
};

export default ToppingsFilter;
