import { ApolloServer } from 'apollo-server-micro';
// Nuxusを使わない場合は手動で定義する必要がある
// import { typeDefs } from '@/graphql/bk/scheama';
// import { resolvers } from '@/graphql/bk/resolver';
import { schema } from '@/graphql/scheama';
import Cors from 'micro-cors';

const cors = Cors();

// Nuxusを使わない場合は手動で定義する必要がある
// const apolloServer = new ApolloServer({ typeDefs, resolvers });
const apolloServer = new ApolloServer({ schema });
const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
