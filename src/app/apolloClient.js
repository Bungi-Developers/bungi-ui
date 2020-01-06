import ApolloClient, { InMemoryCache } from "apollo-boost";

const uri = `${process.env.BUNGI_API_URL}/api`;
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri,
  // cache,
});

// cache.writeData({
//   data: {
//     app: {
//       __typename: 'App',
//       editing: false,
//       navigation: {
//         __typename: 'Navigation',
//       },
//     }
//   }
// });

export default client;
