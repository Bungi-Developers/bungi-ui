import React from "react";
import { View } from "react-native";
import { compose } from "redux";
import { withSafeScroll } from "../../../HOCs";
import { StyledImage } from "../../../components";
import InfoPane from "../InfoPane";

const UserProfileContent = ({ profile }) => {
  const [featuredImage, ...imageUrls] = profile.imageUrls;
  return (
    <View>
      <StyledImage url={featuredImage} />
      <InfoPane {...profile} />
      {imageUrls.map((url, i) => (
        <StyledImage key={i} url={url} />
      ))}
    </View>
  );
};

export default compose(withSafeScroll)(UserProfileContent);
