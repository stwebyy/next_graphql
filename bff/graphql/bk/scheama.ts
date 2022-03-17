import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Pet {
    id: Int
    name: String
    ownerId: Int
  }

  type Owner {
    id: Int
    name: String
  }

  type Query {
    pets: [Pet]!
    owners: [Owner]!
  }
`;
