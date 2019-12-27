import ApolloClient from "apollo-boost";

const uri = `${process.env.BUNGI_API_URL}/api`;
const client = new ApolloClient({
  uri,
});

export default client;
