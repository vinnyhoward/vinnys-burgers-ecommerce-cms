import { useState, useEffect } from 'react';

const gql = String.raw;

const details = `
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
`;

export default function useLatestData() {
  // fresh burgers
  const [freshBurgers, setFreshBurgers] = useState();
  // chefs
  const [chefs, setChefs] = useState();
  useEffect(() => {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "fe42958a-02c1-44ba-ae7f-8ad61b792b87") {
              name
              theChefs {
                ${details}
              }
              freshBurgers {
                ${details}
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // TODO: checl for errors
        // set the data to state
        setFreshBurgers(res.data.StoreSettings.freshBurgers);
        setChefs(res.data.StoreSettings.theChefs);
      })
      .catch((err) => {
        console.log('Fetch Error:', err);
      });
  }, []);

  return {
    freshBurgers,
    chefs,
  };
}
