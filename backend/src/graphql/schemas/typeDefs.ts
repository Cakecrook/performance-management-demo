import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Employee {
    id: ID!
    name: String!
    title: String!
    email: String!
  }

  type Query {
    employees: [Employee!]!
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    createEmployee(name: String!, title: String!, email: String!): Employee!
  }
`;
