import { employeeResolver } from './employeeResolver';
import { userResolver } from './userResolver';

export const resolvers = {
  Query: {
    ...userResolver.Query,
    ...employeeResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
    ...employeeResolver.Mutation,
  },
};
