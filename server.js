const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const schema = buildSchema(`
    type Query {
       products: [Product]
       orders: [Order]
    }

    type Product {
        id: ID!
        description: String!
        price: Float!
        reviews: [Review]
    }

    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }

    type Review {
        rating: Int!
        comment: String
    }

`);

const rootValue = {
	products: [
		{
			id: 'redshoe',
			description: 'Red Shoe',
			price: 185.9
		},
		{
			id: 'bluejean',
			description: 'Blue Jeans',
			price: 150.9
		}
	],
	orders: [
		{
			date: '2005-05-05',
			subtotal: 336.8,
			items: [
				{
					product: {
						id: 'redshoe',
						description: 'Old Red Show',
						price: 115.0
					},
					quantity: 2
				}
			]
		}
	]
};

const app = express();

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		rootValue,
		graphiql: true
	})
);

app.listen(3000, () => {
	console.log('Running GraphQL Server...');
});
