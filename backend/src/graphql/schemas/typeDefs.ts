import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Employee {
    id: ID!
    name: String!
    title: String!
  }

  type Query {
    employees: [Employee!]!
  }
`;
