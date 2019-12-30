import React, { useRef, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { StyledImage } from "../../../components";
import InfoPane from "../InfoPane";

const UserProfileContent = ({ profile }) => {
  const [featuredImage, ...imageUrls] = profile.imageUrls;
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollTo({
      x: 0,
      y: 0,
      animated: true
    });
  }, [profile]);
  return (
    <ScrollView ref={ref}>
      <View>
        <StyledImage url={featuredImage} />
        <InfoPane {...profile} />
        {imageUrls.map((url, i) => (
          <StyledImage key={i} url={url} />
        ))}
      </View>
    </ScrollView>
  );
};

export default UserProfileContent;
