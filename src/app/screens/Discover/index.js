import React from "react";
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
  const user = data.users[0];
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
