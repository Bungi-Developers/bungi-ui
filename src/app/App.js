import React from "react";
import Router from "./navigation/Router";
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/react-hooks";

const App = () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);

export default App;
