// import gql from 'graphql-tag';

import { gql } from 'apollo-server-micro';

export const getAllPets = gql`
  query getAllPets {
    pets {
      id
      name
      ownerId
    }
  }
`;

export const getAllOwners = gql`
  query getAllOwners {
    owners {
      id
      name
    }
  }
`;

export const getPetFindById = gql`
  query getPetFindById($ownerId: Int!) {
    pet(ownerId: $ownerId) {
      id
      name
      ownerId
    }
  }
`;

export const getOwnerFindById = gql`
  query getOwnerFindById($id: Int!) {
    owner(id: $id) {
      id
      name
    }
  }
`;
