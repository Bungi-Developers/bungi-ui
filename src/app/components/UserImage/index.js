import React from "react";
import { compose } from "redux";
import { Text, View, ImageBackground } from "react-native";
import { withStyles } from "../../HOCs";
import ContentBox from "../ContentBox";

const UserImage = ({ url, styles }) => {
  return (
    <ContentBox>
      <ImageBackground
        source={{
          uri: url
        }}
        resizeMode="cover"
        style={styles.background}
      />
    </ContentBox>
  );
};

// TODO: load image sizes more dynamically
export default compose(
  withStyles({
    background: {
      width: "100%",
      height: 400,
      borderRadius: 10,
      overflow: "hidden"
    },
    head: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginLeft: 40,
      marginRight: 40
    },
  })
)(UserImage);
