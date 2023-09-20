import express from 'express';
import { graphqlHTTP as expressGraphQL } from 'express-graphql';
import {schema} from './schema';

const app = express();
const PORT = 3002;

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true,
}));

app.listen(PORT, () => {
    console.log(`GraphQL Explorer running on http://localhost:${PORT}/graphql`);
});
