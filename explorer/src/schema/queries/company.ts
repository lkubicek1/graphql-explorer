import {GraphQLString} from 'graphql';
import axios from 'axios';
import {CompanyType} from '../types/company';

export const companyQueries = {
    company: {
        type: CompanyType,
        args: {id: {type: GraphQLString}},
        async resolve(parentValue: any, {id}: any) {
            try {
                let resp = await axios.get(`http://localhost:3001/companies/${id}`);
                return await resp.data;
            } catch (err: any) {
                throw new Error(`Failed to fetch company with id ${id}: ${err.message}`);
            }
        }
    }
};
