import React from "react";
import { View } from "react-native";
import { compose } from "redux";
import { withSafeScroll, withStyles } from "../../HOCs";
import UserPane from "../../components/UserPane";
import InfoPane from "../../components/InfoPane";
import USERS_QUERY from './query';
import { useQuery } from "@apollo/react-hooks";

export const Discover = () => {
  const { loading, error, data: { users } } = useQuery(USERS_QUERY);
  const user = users[0];

  // TODO: add loading and error components
  if (loading) {
    return (
      <div>Loading</div>
    )
  }
  if (error) {
    return (
      <div>{error}</div>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <UserPane
        name={`${user.firstName} ${user.lastName}`}
        rating={user.rating}
        url={user.profile.imageUrls[0]}
      />
      <InfoPane
        sex="Female"
        {...user.profile}
      />
    </View>
  )
};

export default compose(withSafeScroll)(Discover);
