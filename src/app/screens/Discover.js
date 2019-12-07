import React from "react";
import { compose } from "redux";
import { Text, View } from "react-native";
import { withStyles } from "../HOCs";
import ContentBox from "../components/ContentBox";

export const Discover = ({ styles }) => (
  <View style={styles.container}>
    <ContentBox>
      <Text style={styles.text}>Some Text</Text>
    </ContentBox>
  </View>
);

export default compose(
  withStyles({
    container: {
      flex: 1,
      backgroundColor: "blue",
      alignItems: "center",
      justifyContent: "center"
    },
    text: {
      fontSize: 24
    }
  })
)(Discover);
