import React from "react";
import random from 'lodash/random';
import { View, Text } from "react-native";
import { compose } from "redux";
import { withSafeScroll, withStyles } from "../../HOCs";
import {
  UserFeaturedPane,
  UserProfilePane,
  UserImage,
} from '../../components';
import USERS_QUERY from "./query";
import { useQuery } from "@apollo/react-hooks";

const Discover = () => {
  const {
    loading,
    error,
    data,
  } = useQuery(USERS_QUERY);

  // TODO: add loading and error components
  if (loading) {
    return <Text>Loading</Text>;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }
  const randomUser = random(0, data.users.length -1);
  const user = data.users[randomUser];
  const [featuredImage, ...imageUrls] = user.profile.imageUrls;
  return (
    <View style={{ flex: 1 }}>
      <UserFeaturedPane
        name={`${user.firstName} ${user.lastName}`}
        rating={user.rating}
        url={featuredImage}
      />
      <UserProfilePane sex="Female" {...user.profile} />
      {imageUrls.map((url, i) => 
        <UserImage
          key={i}
          url={url}
        />
      )}
    </View>
  );
};

export default compose(withSafeScroll)(Discover);
