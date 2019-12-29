import React from "react";
import random from "lodash/random";
import { Text, View } from "react-native";
import { compose } from "redux";
import { useQuery } from "@apollo/react-hooks";
import { withStyles } from "../../HOCs";
import USERS_QUERY from "./query";
import UserProfile from "../../templates/UserProfile";
import ButtonBar from "./ButtonBar";

const Discover = ({ styles }) => {
  const { loading, error, data, refetch } = useQuery(USERS_QUERY);

  // TODO: add loading and error components
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <Text>Loading</Text>
      </View>
    );
  }
  if (error || !data.users) {
    return (
      <View style={styles.centerContainer}>
        <Text>{(error && error.message) || "An unknown error occurred"}</Text>
      </View>
    );
  }
  if (!data.users.length) {
    return (
      <View style={styles.centerContainer}>
        <Text>No Users Found</Text>
      </View>
    );
  }
  const user = data.users[0];
  return (
    <View style={styles.container}>
      <UserProfile user={user} />
      <ButtonBar refetch={refetch} user={user} />
    </View>
  );
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
  })
)(Discover);
