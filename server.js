const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const schema = buildSchema(`
    type Query {
        description: String
        price: Float

    }
`);

const rootValue = {
    description: "Red Shoe",
    price: 42.12,
};

const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        rootValue,
        graphiql: true
    })
);

app.listen(3000, () => {
    console.log("Running GraphQL Server...");
});
