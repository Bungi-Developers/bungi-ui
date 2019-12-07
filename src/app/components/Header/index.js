import React from "react";
import { compose } from "redux";
import { View } from "react-native";
import { withStyles } from "../../HOCs";

const Header = ({ color, styles, children }) => (
  <View style={styles.container}>{children}</View>
);

export default compose(
  withStyles({
    container: {
      width: "100%",
      height: 40,
      padding: 10,
      backgroundColor: props => props.color || "white"
    }
  })
)(Header);
