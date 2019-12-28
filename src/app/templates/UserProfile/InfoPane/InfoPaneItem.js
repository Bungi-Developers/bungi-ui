import React from "react";
import { compose } from "redux";
import { Text, View } from "react-native";
import { withStyles } from "../../../HOCs";

const InfoPaneItem = ({ content, Icon, styles }) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Icon size={32} />
    </View>
    <Text style={styles.text}>{content}</Text>
  </View>
);

export default compose(
  withStyles({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 10,
      paddingVertical: 12,
      paddingHorizontal: 12,
      justifyContent: "flex-start",
      flex: 1,
      borderBottomColor: "black",
      borderBottomWidth: props => (props.last ? 0 : 1)
    },
    iconContainer: { marginRight: 12, width: 32 },
    text: {
      fontSize: 18,
      height: 18,
      fontFamily: "avenir-next"
    }
  })
)(InfoPaneItem);
