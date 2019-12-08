import React from "react";
import { compose } from "redux";
import { View, Text } from "react-native";
import { headerHeight } from "../../constants/app";
import { withStyles } from "../../HOCs";

const Header = ({ color, styles }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Bungee</Text>
  </View>
);

export default compose(
  withStyles({
    container: {
      width: "100%",
      height: headerHeight,
      padding: 10,
      marginBottom: 10,
      backgroundColor: props => props.color || "white",
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      borderTopWidth: 1,
      borderTopColor: 'black',
      borderStyle: 'solid',
    },
    title: {
      fontSize: 20
    }
  })
)(Header);
