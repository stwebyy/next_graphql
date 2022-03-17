import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Owner = {
  __typename?: 'Owner';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Pet = {
  __typename?: 'Pet';
  id: Scalars['Int'];
  name: Scalars['String'];
  ownerId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  owner: Owner;
  owners: Array<Maybe<Owner>>;
  pet: Pet;
  pets: Array<Maybe<Pet>>;
};


export type QueryOwnerArgs = {
  id: Scalars['Int'];
};


export type QueryPetArgs = {
  ownerId: Scalars['Int'];
};

export type GetAllPetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPetsQuery = { __typename?: 'Query', pets: Array<{ __typename?: 'Pet', id: number, name: string, ownerId: number } | null> };

export type GetAllOwnersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOwnersQuery = { __typename?: 'Query', owners: Array<{ __typename?: 'Owner', id: number, name: string } | null> };

export type GetPetFindByIdQueryVariables = Exact<{
  ownerId: Scalars['Int'];
}>;


export type GetPetFindByIdQuery = { __typename?: 'Query', pet: { __typename?: 'Pet', id: number, name: string, ownerId: number } };

export type GetOwnerFindByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetOwnerFindByIdQuery = { __typename?: 'Query', owner: { __typename?: 'Owner', id: number, name: string } };


export const GetAllPetsDocument = gql`
    query getAllPets {
  pets {
    id
    name
    ownerId
  }
}
    `;

/**
 * __useGetAllPetsQuery__
 *
 * To run a query within a React component, call `useGetAllPetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPetsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPetsQuery, GetAllPetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPetsQuery, GetAllPetsQueryVariables>(GetAllPetsDocument, options);
      }
export function useGetAllPetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPetsQuery, GetAllPetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPetsQuery, GetAllPetsQueryVariables>(GetAllPetsDocument, options);
        }
export type GetAllPetsQueryHookResult = ReturnType<typeof useGetAllPetsQuery>;
export type GetAllPetsLazyQueryHookResult = ReturnType<typeof useGetAllPetsLazyQuery>;
export type GetAllPetsQueryResult = Apollo.QueryResult<GetAllPetsQuery, GetAllPetsQueryVariables>;
export const GetAllOwnersDocument = gql`
    query getAllOwners {
  owners {
    id
    name
  }
}
    `;

/**
 * __useGetAllOwnersQuery__
 *
 * To run a query within a React component, call `useGetAllOwnersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllOwnersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllOwnersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllOwnersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllOwnersQuery, GetAllOwnersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllOwnersQuery, GetAllOwnersQueryVariables>(GetAllOwnersDocument, options);
      }
export function useGetAllOwnersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllOwnersQuery, GetAllOwnersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllOwnersQuery, GetAllOwnersQueryVariables>(GetAllOwnersDocument, options);
        }
export type GetAllOwnersQueryHookResult = ReturnType<typeof useGetAllOwnersQuery>;
export type GetAllOwnersLazyQueryHookResult = ReturnType<typeof useGetAllOwnersLazyQuery>;
export type GetAllOwnersQueryResult = Apollo.QueryResult<GetAllOwnersQuery, GetAllOwnersQueryVariables>;
export const GetPetFindByIdDocument = gql`
    query getPetFindById($ownerId: Int!) {
  pet(ownerId: $ownerId) {
    id
    name
    ownerId
  }
}
    `;

/**
 * __useGetPetFindByIdQuery__
 *
 * To run a query within a React component, call `useGetPetFindByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPetFindByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPetFindByIdQuery({
 *   variables: {
 *      ownerId: // value for 'ownerId'
 *   },
 * });
 */
export function useGetPetFindByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPetFindByIdQuery, GetPetFindByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPetFindByIdQuery, GetPetFindByIdQueryVariables>(GetPetFindByIdDocument, options);
      }
export function useGetPetFindByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPetFindByIdQuery, GetPetFindByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPetFindByIdQuery, GetPetFindByIdQueryVariables>(GetPetFindByIdDocument, options);
        }
export type GetPetFindByIdQueryHookResult = ReturnType<typeof useGetPetFindByIdQuery>;
export type GetPetFindByIdLazyQueryHookResult = ReturnType<typeof useGetPetFindByIdLazyQuery>;
export type GetPetFindByIdQueryResult = Apollo.QueryResult<GetPetFindByIdQuery, GetPetFindByIdQueryVariables>;
export const GetOwnerFindByIdDocument = gql`
    query getOwnerFindById($id: Int!) {
  owner(id: $id) {
    id
    name
  }
}
    `;

/**
 * __useGetOwnerFindByIdQuery__
 *
 * To run a query within a React component, call `useGetOwnerFindByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOwnerFindByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOwnerFindByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOwnerFindByIdQuery(baseOptions: Apollo.QueryHookOptions<GetOwnerFindByIdQuery, GetOwnerFindByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOwnerFindByIdQuery, GetOwnerFindByIdQueryVariables>(GetOwnerFindByIdDocument, options);
      }
export function useGetOwnerFindByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOwnerFindByIdQuery, GetOwnerFindByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOwnerFindByIdQuery, GetOwnerFindByIdQueryVariables>(GetOwnerFindByIdDocument, options);
        }
export type GetOwnerFindByIdQueryHookResult = ReturnType<typeof useGetOwnerFindByIdQuery>;
export type GetOwnerFindByIdLazyQueryHookResult = ReturnType<typeof useGetOwnerFindByIdLazyQuery>;
export type GetOwnerFindByIdQueryResult = Apollo.QueryResult<GetOwnerFindByIdQuery, GetOwnerFindByIdQueryVariables>;