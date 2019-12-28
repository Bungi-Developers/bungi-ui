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
  const { loading, error, data } = useQuery(USERS_QUERY);

  // TODO: add loading and error components
  if (loading) {
    return <Text>Loading</Text>;
  }
  if (error || !data.users) {
    return (
      <Text>{(error && error.message) || "An unknown error occurred"}</Text>
    );
  }
  const randomUser = random(0, data.users.length - 1);
  const user = data.users[randomUser];
  return (
    <View style={styles.container}>
      <UserProfile user={user} />
      <ButtonBar />
    </View>
  );
};

export default compose(
  withStyles({
    container: {
      flex: 1
    }
  })
)(Discover);
