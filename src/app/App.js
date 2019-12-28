import React, { useEffect } from "react";
import * as Font from "expo-font";
import { ApolloProvider } from "@apollo/react-hooks";
import Router from "./navigation/Router";
import client from "./apolloClient";

const App = () => {
  useEffect(() => {
    Font.loadAsync({
      "avenir-next": require("../../assets/fonts/AvenirNextLTPro-Regular.otf"),
      "avenir-next-bold": require("../../assets/fonts/AvenirNextLTPro-Bold.otf")
    });
  });
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
};

export default App;
