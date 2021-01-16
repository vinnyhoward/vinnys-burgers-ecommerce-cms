import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
	siteMetadata: {
		title: "Vinny's Burgers",
		siteUrl: 'https://google.com',
		description: 'The best vegan burgers in existence',
		instagram: '@vinnyvader',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-source-sanity',
			options: {
				projectId: process.env.SANITY_PROJECT_ID,
				dataset: process.env.ENVIRONMENT,
				watchMode: true,
				token: process.env.SANITY_TOKEN,
			},
		},
		{
			resolve: 'gatsby-plugin-generate-typings',
			options: {
				dest: './src/generated/graphql-types.d.ts',
			},
		},
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: true, // defaults to false
				jsxPragma: `jsx`, // defaults to "React"
				allExtensions: true, // defaults to false
			},
		},
	],
};
