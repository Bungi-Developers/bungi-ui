import React from "react";
import { compose } from "redux";
import { Text, View, ImageBackground } from "react-native";
import { withStyles } from "../../../HOCs";

const ChatTableItem = ({ styles, name, imageUrl, lastSent }) => (
  <View style={styles.container}>
    <ImageBackground
      source={{
        uri: imageUrl
      }}
      resizeMode="cover"
      imageStyle={{ borderRadius: 25 }}
      style={styles.image}
    />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.time}>{lastSent}</Text>
  </View>
);

export default compose(
  withStyles({
    container: {
      flex: 1,
      padding: 12,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      borderBottomColor: "#ccc",
      borderBottomWidth: 1
    },
    image: {
      height: 48,
      width: 48,
      marginRight: 12,
      borderRadius: 50
    },
    name: {
      fontFamily: "avenir-next",
      fontSize: 22,
      flex: 2
    },
    time: {
      fontFamily: "avenir-next",
      fontSize: 12,
      color: "#666",
      fontStyle: "italic"
    }
  })
)(ChatTableItem);
