import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from 'react-redux';
import Router from "./navigation/Router";
import client from "./apolloClient";
import initStore from './store';

const store = initStore();

const App = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!loaded) {
      Font.loadAsync({
        "avenir-next": require("../../assets/fonts/AvenirNextLTPro-Regular.otf"),
        "avenir-next-bold": require("../../assets/fonts/AvenirNextLTPro-Bold.otf")
      }).then(() => setLoaded(true));
    }
  }, [loaded, setLoaded]);
  return (
    loaded && (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Router />
        </ApolloProvider>
      </Provider>
    )
  );
};

export default App;
