import {GraphQLObjectType, GraphQLSchema} from 'graphql';
import {userMutations} from './mutations/user';
import {userQueries} from "./queries/user";
import {companyQueries} from "./queries/company";

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        ...userQueries,
        ...companyQueries
    },
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...userMutations
    },
});

export const schema = new GraphQLSchema({
    mutation,
    query: RootQuery,
});
