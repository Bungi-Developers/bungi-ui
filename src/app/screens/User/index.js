import React from "react";
import { Text, View } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import USER_QUERY from "./query";
import UserProfile from "../../templates/UserProfile";

const User = () => {
  const { loading, error, data } = useQuery(USER_QUERY);

  // TODO: add loading and error components
  if (loading) {
    return <Text>Loading</Text>;
  }
  if (error || !data.user) {
    return (
      <Text>{(error && error.message) || "An unknown error occurred"}</Text>
    );
  }
  return <UserProfile editable={true} user={data.user} />;
};

export default User;
