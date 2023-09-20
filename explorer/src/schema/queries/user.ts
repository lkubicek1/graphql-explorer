import {GraphQLString} from 'graphql';
import axios from 'axios';
import {UserType} from '../types/user';

export const userQueries = {
    user: {
        type: UserType,
        args: {id: {type: GraphQLString}},
        async resolve(parentValue: any, {id}: any) {
            try {
                let resp = await axios.get(`http://localhost:3001/users/${id}`);
                return await resp.data;
            } catch (err: any) {
                throw new Error(`Failed to fetch user with id ${id}: ${err.message}`);
            }
        }
    }
};
