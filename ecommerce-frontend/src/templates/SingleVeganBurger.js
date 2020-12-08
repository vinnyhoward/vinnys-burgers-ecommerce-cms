import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BurgerGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export default function SingleVeganBurger({
  data: {
    singleVeganBurger: { image, name, toppings },
  },
}) {
  const renderToppings = () =>
    toppings.map((topping) => <li key={topping.id}>{topping.name}</li>);

  return (
    <>
      <SEO title={name} image={image?.asset?.fluid?.src} />
      <BurgerGrid>
        <Img fluid={image.asset.fluid} />
        <div>
          <h2 className="mark">{name}</h2>
          <ul>{renderToppings()}</ul>
        </div>
      </BurgerGrid>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    singleVeganBurger: sanityVeganBurger(slug: { current: { eq: $slug } }) {
      id
      name
      image {
        asset {
          fluid(maxWidth: 800, maxHeight: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        id
        name
        glutenFree
      }
    }
  }
`;
