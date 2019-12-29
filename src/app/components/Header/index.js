import React from "react";
import { compose } from "redux";
import { View } from "react-native";
import { headerHeight } from "../../constants/app";
import { withStyles } from "../../HOCs";

const Header = ({ styles, children }) => (
  <View style={styles.container}>{children}</View>
);

export default compose(
  withStyles({
    container: {
      width: "100%",
      height: headerHeight,
      padding: 10,
      marginBottom: 10,
      backgroundColor: props => props.color || "white",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderBottomWidth: 1,
      borderBottomColor: "gray",
      borderStyle: "solid"
    }
  })
)(Header);
