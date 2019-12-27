import React from "react";
import { compose } from "redux";
import { Text, View } from "react-native";
import { withStyles } from "../../HOCs";

export const ChatList = ({ styles }) => (
  <View style={styles.container}>
    <Text style={styles.text}>ChatList</Text>
  </View>
);

export default compose(
  withStyles({
    container: {
      flex: 1,
      backgroundColor: "green",
      alignItems: "center",
      justifyContent: "center"
    },
    text: {
      fontSize: 24
    }
  })
)(ChatList);
