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
      marginLeft: 20,
      marginRight: 20,
      marginTop: 8,
      borderRadius: 10,
      backgroundColor: props => props.color || "white"
    }
  })
)(ContentBox);
