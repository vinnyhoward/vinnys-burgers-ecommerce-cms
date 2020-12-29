import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const ChefGrid = styled.div`
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const ChefStyles = styled.div`
	a {
		text-decoration: none;
	}
	h2 {
		transform: rotate(-2deg);
		text-align: center;
		font-size: 4rem;
		margin-bottom: -2rem;
		position: relative;
		z-index: 2;
	}
	.description {
		background: var(--champaignYellow);
		padding: 1rem;
		margin: 2rem;
		margin-top: -4rem;
		z-index: 2;
		position: relative;
		transform: rotate(1deg);
		text-align: center;
	}
`;

export default function TheChefsPage({
	data,
	data: { chefs },
	pageContext: { pageSize, currentPage, skip, totalChefCount },
}) {
	const theChefs = chefs.nodes;

	const renderChefs = () =>
		theChefs.map(({ slug, name, image, description, id }) => (
			<ChefStyles key={id}>
				<Link to={`/the-chefs/${slug.current}`}>
					<h2>
						<span className="mark">{name}</span>
					</h2>
				</Link>
				<Img fluid={image.asset.fluid} alt={name} />
				<p className="description">{description}</p>
			</ChefStyles>
		));
	return (
		<>
			<SEO title={`Vinny's Burgers - Page ${currentPage || 1}`} />
			<Pagination
				currentPage={currentPage || 1}
				base="/the-chefs"
				totalCount={totalChefCount}
				{...{ pageSize, skip }}
			/>
			<ChefGrid>{renderChefs()}</ChefGrid>
		</>
	);
}

export const query = graphql`
	query($skip: Int = 0, $pageSize: Int = 2) {
		chefs: allSanityPerson(limit: $pageSize, skip: $skip) {
			nodes {
				name
				id
				slug {
					current
				}
				description
				image {
					asset {
						fluid(maxWidth: 400, maxHeight: 400) {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}
	}
`;
