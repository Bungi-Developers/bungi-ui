import React from "react";
import { compose } from "redux";
import { View } from "react-native";
import { withStyles } from "../../HOCs";

const ContentBox = ({ color, styles, children }) => (
  <View style={styles.container}>{children}</View>
);

export default compose(
  withStyles({
    container: {
      width: "90%",
      alignSelf: "center",
      padding: 20,
      borderRadius: 10,
      backgroundColor: props => props.color || "white"
    }
  })
)(ContentBox);
