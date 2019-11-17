import * as React from "react";
import { compose } from "redux";
import { Text, View } from "react-native";
import { withStyles } from "../HOCs";

interface Props {
  styles: {
    [index: string]: object
  }
}

export const Chat: React.FC<Props> = ({ styles }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Chat</Text>
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
)(Chat);
