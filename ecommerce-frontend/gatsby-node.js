import path from 'path';
import fetch from 'isomorphic-fetch';

async function turnVeganBurgersIntoPages({ graphql, actions }) {
	const singleVeganBurger = path.resolve(
		'./src/templates/SingleVeganBurger.js'
	);

	const { data } = await graphql(`
		query {
			veganBurger: allSanityVeganBurger {
				nodes {
					name
					slug {
						current
					}
				}
			}
		}
	`);

	data.veganBurger.nodes.forEach((veganBurger) => {
		actions.createPage({
			path: `/vegan-burger/${veganBurger.slug.current}`,
			component: singleVeganBurger,
			context: {
				slug: veganBurger.slug.current,
			},
		});
	});
}

async function turnToppingsIntoPages({ graphql, actions }) {
	const singleToppings = path.resolve('./src/pages/vegan-burgers.js');

	const { data } = await graphql(`
		query {
			toppings: allSanityTopping {
				nodes {
					name
					id
				}
			}
		}
	`);

	data.toppings.nodes.forEach((topping) => {
		actions.createPage({
			path: `topping/${topping.name}`,
			component: singleToppings,
			context: {
				toppings: topping.name,
				toppingRegex: `/${topping.name}/i`,
			},
		});
	});
}

async function turnChefsIntoPages({ graphql, actions }) {
	const { data } = await graphql(`
		query {
			chefs: allSanityPerson {
				totalCount
				nodes {
					name
					id
					slug {
						current
					}
				}
			}
		}
	`);

	const singularChef = path.resolve('./src/templates/Chef.js');
	data.chefs.nodes.forEach((chef) => {
		actions.createPage({
			component: singularChef,
			path: `/the-chefs/${chef.slug.current}`,
			context: {
				name: chef.person,
				slug: chef.slug.current,
			},
		});
	});

	const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
	const pageCount = Math.ceil(data.chefs.totalCount / pageSize);
	const theChefs = path.resolve('./src/pages/the-chefs.tsx');

	Array.from({ length: pageCount }).forEach((_, index) => {
		actions.createPage({
			path: `/the-chefs/${index + 1}`,
			component: theChefs,
			context: {
				skip: index * pageSize,
				currentPage: index + 1,
				totalChefCount: data.chefs.totalCount,
				pageSize,
			},
		});
	});
}

async function fetchBeersAndConvertIntoNodes({
	actions,
	createNodeId,
	createContentDigest,
}) {
	let beers;

	try {
		const beerResults = await fetch('https://api.sampleapis.com/beers/ale');
		beers = await beerResults.json();
	} catch (err) {
		console.error('Failed fetching beers api:', err);
	}

	for (const beer of beers) {
		const nodeMeta = {
			id: createNodeId(`beer-${beer.name}`),
			parent: null,
			children: [],
			internal: {
				type: 'Beer',
				mediaType: 'application/json',
				contentDigest: createContentDigest(beer),
			},
		};

		actions.createNode({
			...beer,
			...nodeMeta,
		});
	}
}

export async function sourceNodes(params) {
	try {
		await Promise.all([fetchBeersAndConvertIntoNodes(params)]);
	} catch (err) {
		console.error('Failed to source nodes:', err);
	}
}

export async function createPages(params) {
	try {
		await Promise.all([
			turnVeganBurgersIntoPages(params),
			turnToppingsIntoPages(params),
			turnChefsIntoPages(params),
		]);
	} catch (err) {
		console.error('Failed to create pages', err);
	}
}
