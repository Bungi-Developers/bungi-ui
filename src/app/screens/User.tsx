import React from "react";
import { compose } from "redux";
import { Text, View } from "react-native";
import { withStyles } from "../HOCs";

export const User = ({ styles }) => (
  <View style={styles.container}>
    <Text style={styles.text}>User</Text>
  </View>
);

export default compose(
  withStyles({
    container: {
      flex: 1,
      backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center"
    },
    text: {
      fontSize: 24
    }
  })
)(User);
