import React from 'react';
import { graphql } from 'gatsby';
import VeganBurgersList from '../components/VeganBurgersList';
import ToppingsFilter from '../components/ToppingsFilter';
import SEO from '../components/SEO';

export default function VeganBurgerPage({ data, pageContext }) {
  const veganBurgers = data.veganBurgers.nodes;
  return (
    <>
      <SEO
        title={
          pageContext.toppings
            ? `Burgers with ${pageContext.toppings}`
            : 'All Vegan Burgers'
        }
      />
      <div>
        <ToppingsFilter activeTopping={pageContext.toppings} />
        <VeganBurgersList {...{ veganBurgers }} />
      </div>
    </>
  );
}

export const query = graphql`
  query veganBurgerQuery($toppingRegex: String) {
    veganBurgers: allSanityVeganBurger(
      filter: { toppings: { elemMatch: { name: { regex: $toppingRegex } } } }
    ) {
      nodes {
        id
        name
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fixed(width: 400, height: 400) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
