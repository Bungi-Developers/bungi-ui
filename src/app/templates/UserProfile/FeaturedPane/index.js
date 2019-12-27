import React from "react";
import { compose } from "redux";
import { Text, View, ImageBackground } from "react-native";
import { withStyles } from "../../../HOCs";
import { ContentBox } from "../../../components";

const FeaturedPane = ({ url, name, rating, styles }) => {
  return (
    <View>
      <View style={styles.head}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.rating}>{rating}</Text>
      </View>
      <ContentBox>
        <ImageBackground
          source={{
            uri: url
          }}
          resizeMode="cover"
          style={styles.background}
        />
      </ContentBox>
    </View>
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
      marginBottom: 20,
      justifyContent: "space-between",
      alignItems: "baseline",
      marginLeft: 40,
      marginRight: 40
    },
    name: {
      fontSize: 28
    },
    rating: {
      fontSize: 16
    }
  })
)(FeaturedPane);
