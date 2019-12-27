import React from "react";
import { View } from "react-native";
import { compose } from "redux";
import { withSafeScroll } from "../../HOCs";
import { StyledImage } from "../../components";
import FeaturedPane from "./FeaturedPane";
import InfoPane from "./InfoPane";
import { selectFeaturedImage, selectImageUrls } from "./selectors";

const UserProfile = ({
  user: { name, rating, profile },
  imageUrls,
  featuredImage
}) => (
  <View style={{ flex: 1 }}>
    <FeaturedPane name={name} rating={rating} url={featuredImage} />
    <InfoPane {...profile} />
    {imageUrls.map((url, i) => (
      <StyledImage key={i} url={url} />
    ))}
  </View>
);

const mapStateToProps = (...args) => ({
  featuredImage: selectFeaturedImage(...args),
  imageUrls: selectImageUrls(...args)
});

export default compose(withSafeScroll, mapStateToProps)(UserProfile);
