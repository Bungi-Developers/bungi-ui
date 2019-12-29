import React from "react";
import { compose } from "redux";
import { Text, View, ImageBackground } from "react-native";
import { withStyles } from "../../../HOCs";

const ChatTableItem = ({ styles, name, image, lastSent }) => (
  <View style={styles.container}>
    <ImageBackground
      source={{
        uri: image
      }}
      resizeMode="cover"
      style={styles.image}
    />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.name}>{lastSent}</Text>
  </View>
);

export default compose(
  withStyles({
    container: {
      flex: 1,
      backgroundColor: "green",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    image: {
      height: 48,
      width: 48,
      borderRadius: 50
    },
    name: {
      fontFamily: "avenir-next",
      fontSize: 18
    },
    time: {
      fontFamily: "avenir-next",
      fontSize: 12,
      fontStyle: "italic"
    }
  })
)(ChatTableItem);
