import React from "react";
import { View } from "react-native";
import { compose } from "redux";
import { withSafeScroll, withStyles } from "../../HOCs";
import { StyledImage } from "../../components";
import FeaturedPane from "./FeaturedPane";
import InfoPane from "./InfoPane";

const UserProfile = ({ user: { name, rating, profile }, styles }) => {
  const [featuredImage, ...imageUrls] = profile.imageUrls;
  return (
    <View style={styles.container}>
      <FeaturedPane name={name} rating={rating} url={featuredImage} />
      <InfoPane {...profile} />
      {imageUrls.map((url, i) => (
        <StyledImage key={i} url={url} />
      ))}
    </View>
  );
};

export default compose(
  withSafeScroll,
  withStyles({
    container: {
      flex: 1
    }
  })
)(UserProfile);
