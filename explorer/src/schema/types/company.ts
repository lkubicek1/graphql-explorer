import {GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';
import {UserType} from './user';
import axios from "axios";

export const CompanyType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        users: {
            type: new GraphQLList(UserType as typeof UserType),  // Explicitly annotate the type here
            async resolve(parentValue, args) {
                let res = await axios
                    .get(`http://localhost:3001/companies/${parentValue.id}/users`);
                return await res.data;
            }
        }
    }),
});
