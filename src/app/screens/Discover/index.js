import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { compose } from "redux";
import { useQuery } from "@apollo/react-hooks";
import { withConnect, withStyles } from "../../HOCs";
import USERS_QUERY from "./query";
import UserProfile from "../../templates/UserProfile";
import ButtonBar from "./ButtonBar";
import { setNavigation as setNavigationAction } from "../../action-creators/app";

const Discover = ({ styles, navigation, setNavigation }) => {
  const [fetched, setFetched] = useState(true);
  const { loading, error, data, refetch } = useQuery(USERS_QUERY);

  setNavigation(navigation);

  const refetchWithTimeout = () => {
    setFetched(false);
    return setTimeout(async () => {
      await refetch();
      setFetched(true);
    }, 1000);
  };
  // TODO: add loading and error components
  if (loading || !fetched) {
    return (
      <View style={styles.centerContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error || !data.users) {
    return (
      <View style={styles.centerContainer}>
        <Text>{(error && error.message) || "An unknown error occurred"}</Text>
        <Button title="Refresh" onPress={() => refetch()} />
      </View>
    );
  }
  if (!data.users.length) {
    return (
      <View style={styles.centerContainer}>
        <Text>No Users Found</Text>
        <Button title="Refresh" onPress={() => refetch()} />
      </View>
    );
  }
  const user = data.users[0];
  return (
    <View style={styles.container}>
      <UserProfile user={user} />
      <ButtonBar refetch={refetchWithTimeout} user={user} />
    </View>
  );
};

const actionMap = {
  setNavigation: setNavigationAction
};

export default compose(
  withStyles({
    container: {
      flex: 1
    },
    centerContainer: {
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  }),
  withConnect({}, actionMap)
)(Discover);
