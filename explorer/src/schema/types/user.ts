import {GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import {CompanyType} from './company';
import axios from "axios";

export const UserType: GraphQLObjectType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLString)},
        firstName: {type: GraphQLString},
        age: {type: GraphQLInt},
        company: {
            type: CompanyType as typeof CompanyType,  // Explicitly annotate the type here
            async resolve(parentValue, args) {
                const res = await axios
                    .get(`http://localhost:3001/companies/${parentValue.companyId}`);
                return res.data;
            }
        },
    }),
});
