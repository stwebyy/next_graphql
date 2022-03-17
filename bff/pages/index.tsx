import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { gql, useQuery } from '@apollo/client';
import {
  GetAllOwnersQuery,
  GetAllPetsQuery,
} from '@/front_graphql/generated/graphql';
import { getAllPets } from '@/front_graphql/queries.graphql';

const Home: NextPage = () => {
  const { data, loading, error } = useQuery<GetAllPetsQuery>(getAllPets);
  console.log(data?.pets);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.container}>
      <h1>Pet name</h1>
      <ul>
        {/* この辺りはまだ表示されません */}
        {data?.pets.map((data) => {
          <>
            <li key={data?.id}>
              <p>{data?.id}</p>
              <p>{data?.name}</p>
              <p>{data?.ownerId}</p>
            </li>
          </>;
        })}
      </ul>
    </div>
  );
};

export default Home;
