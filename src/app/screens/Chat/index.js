import React from "react";
import uuid from "lodash/uniqueId";
import { compose } from "redux";
import { Text, View } from "react-native";
import { withStyles } from "../../HOCs";
import ChatTable from "./ChatTable";

export const Chat = ({ styles }) => (
  <View style={styles.container}>
    <ChatTable />
  </View>
);

export default compose(
  withStyles({
    container: {
      width: "100%"
    }
  })
)(Chat);
