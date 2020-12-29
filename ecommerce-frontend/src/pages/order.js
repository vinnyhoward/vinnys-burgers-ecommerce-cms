/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import VeganBurgerOrder from '../components/VeganBurgerOrder';
import useForm from '../utils/useForm';
import calculateBurgerPrice from '../utils/calculateBurgerPrice';
import useVeganBurger from '../utils/useVeganBurger';
import formatMoney from '../utils/formatMoney';
import calculateOrderTotal from '../utils/calculateOrderTotal';
import OrderFormStyles from '../styles/OrderFormStyles';
import MenuItemStyles from '../styles/MenuItemStyles';

export default function OrdersPage({ data }) {
	const veganBurgers = data.veganBurgers.nodes;

	const initialValueState = {
		email: '',
		name: '',
		mapleSyrup: '',
	};
	const { values, updateValues } = useForm(initialValueState);

	const initialOrderState = {
		veganBurgers,
		inputs: values,
	};
	const {
		order,
		addToOrder,
		removeFromOrder,
		error,
		loading,
		message,
		submitOrder,
	} = useVeganBurger(initialOrderState);
	const { name, email } = values;

	const renderSizesAndPrice = (burger) =>
		['S', 'M', 'L'].map((size, idx) => (
			<button
				key={idx}
				type="button"
				onClick={() => addToOrder({ id: burger.id, size })}
			>
				{size} {formatMoney(calculateBurgerPrice(burger.price, size))}
			</button>
		));

	const renderAllBurgers = () =>
		veganBurgers.map((burger, index) => (
			<MenuItemStyles key={`${index}-${burger.id}`}>
				<Img
					width="50"
					height="50"
					fluid={burger.image.asset.fluid}
					alt={burger.name}
				/>
				<div>
					<h2>{burger.name}</h2>
				</div>
				<div>{renderSizesAndPrice(burger)}</div>
			</MenuItemStyles>
		));
	return (
		<>
			<SEO title="Order some burgers" />
			<OrderFormStyles onSubmit={submitOrder}>
				<fieldset disabled={loading}>
					<legend>Your Info</legend>
					<label htmlFor="name">name</label>
					<input
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={updateValues}
					/>
					<label htmlFor="email">email </label>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={updateValues}
					/>
					<input
						type="screwYou"
						name="screwYou"
						id="screwYou"
						value={values.screwYou}
						onChange={updateValues}
						className="screwYou"
					/>
				</fieldset>
				<fieldset disabled={loading} className="menu">
					<legend>Menu</legend>
					{renderAllBurgers()}
				</fieldset>
				<fieldset disabled={loading} className="order">
					<legend>Order</legend>
					<VeganBurgerOrder {...{ order, removeFromOrder, veganBurgers }} />
				</fieldset>
				<fieldset className="order-button-container" disabled={loading}>
					<h3>
						Your total is{' '}
						{formatMoney(calculateOrderTotal(order, veganBurgers))}
					</h3>
					<div>{error ? <p>{error}</p> : ''}</div>
					<div>{message ? <p>{message}</p> : ''}</div>
					<button disabled={loading} type="submit">
						{loading ? 'Placing Order...' : 'Order Ahead'}
					</button>
				</fieldset>
			</OrderFormStyles>
		</>
	);
}

export const query = graphql`
	query {
		veganBurgers: allSanityVeganBurger {
			nodes {
				id
				name
				slug {
					current
				}
				price
				image {
					asset {
						fluid(maxWidth: 100) {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}
	}
`;
