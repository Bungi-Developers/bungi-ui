import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import Router from "./navigation/Router";
import client from "./apolloClient";

const App = () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);

export default App;
