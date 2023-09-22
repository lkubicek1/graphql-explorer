import {GraphQLInt, GraphQLNonNull, GraphQLString} from 'graphql';
import axios from 'axios';
import {UserType} from '../types/user';

export const userMutations = {
    addUser: {
        type: UserType,
        args: {
            firstName: {type: new GraphQLNonNull(GraphQLString)},
            age: {type: GraphQLInt},
            companyId: {type: GraphQLString}
        },
        async resolve(parentValue: any, {firstName, age, companyId}: any) {
            try {
                let res = await axios.post('http://localhost:3001/users', {firstName, age, companyId});
                return await res.data;
            } catch (err: any) {
                throw new Error(`Failed to add user: ${err.message}`);
            }
        }
    },
    deleteUser: {
        type: UserType,
        args: {
            id: {type: new GraphQLNonNull(GraphQLString)}
        },
        async resolve(parentValue: any, {id}: any) {
            try {
                let res = await axios.delete(`http://localhost:3001/users/${id}`);
                return await res.data;
            } catch (err: any) {
                throw new Error(`Failed to delete user with id ${id}: ${err.message}`);
            }
        }
    },
    editUser: {
        type: UserType,
        args: {
            id: {type: new GraphQLNonNull(GraphQLString)},
            firstName: {type: GraphQLString},
            age: {type: GraphQLInt},
            companyId: {type: GraphQLString}
        },
        async resolve(parentValue: any, args: any) {
            try {
                let res = await axios.patch(`http://localhost:3001/users/${args.id}`, args);
                return await res.data;
            } catch (err: any) {
                throw new Error(`Failed to edit user with id ${args.id}: ${err.message}`);
            }
        }
    }
};
