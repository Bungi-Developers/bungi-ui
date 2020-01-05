import React, { useRef, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { StyledImage } from "../../../components";
import InfoPane from "../InfoPane";

const UserProfileContent = ({ profile, editing }) => {
  const [featuredImage, ...imageUrls] = profile.imageUrls;
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollTo({
      x: 0,
      y: 0,
      animated: false
    });
  }, [profile]);
  return (
    <ScrollView ref={ref}>
      <View>
        <StyledImage url={featuredImage} />
        <InfoPane editing={editing} {...profile} />
        {imageUrls.map((url, i) => (
          <StyledImage key={i} url={url} />
        ))}
      </View>
    </ScrollView>
  );
};

export default UserProfileContent;
