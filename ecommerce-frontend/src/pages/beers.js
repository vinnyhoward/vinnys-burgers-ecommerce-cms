import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BeerGridStyles = styled.div`
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerStyles = styled.div`
	border: 1px solid var(--grey);
	padding: 2rem;
	text-align: center;
	img {
		width: 100%;
		height: 200px;
		object-fit: contain;
		display: grid;
		align-items: center;
		font-size: 10px;
	}
`;
export default function BeersPage({ data: { beers } }) {
	const renderBeers = () =>
		beers.nodes.map(
			({ id, name, image, price, rating: { average, reviews } }) => {
				const beerRating = Math.round(average);
				return (
					<SingleBeerStyles key={id}>
						<img src={image} alt={name} />
						<h3>{name}</h3>
						{price}
						<p title={`${beerRating} out of 5 stars`}>
							{`⭐`.repeat(beerRating)}
							<span style={{ filter: `grayscale(100%)` }}>
								{`⭐`.repeat(5 - beerRating)}
							</span>
							<span>{reviews}</span>
						</p>
					</SingleBeerStyles>
				);
			}
		);
	return (
		<>
			<SEO title={`Beers! We have ${beers.nodes.length} in stock`} />
			<h2 className="center">
				We have {beers.nodes.length} beers available. Dine in only!
			</h2>
			<BeerGridStyles>{renderBeers()}</BeerGridStyles>
		</>
	);
}

export const query = graphql`
	query {
		beers: allBeer {
			nodes {
				id
				name
				image
				price
				rating {
					average
					reviews
				}
			}
		}
	}
`;
