import React from "react";
import uuid from "lodash/uniqueId";
import { compose } from "redux";
import { Text, SafeAreaView } from "react-native";
import { withStyles } from "../../HOCs";
import { Header } from "../../components";
import ChatTable from "./ChatTable";

export const Chat = ({ styles }) => (
  <SafeAreaView style={styles.container}>
    <Header>
      <Text>Chat</Text>
    </Header>
    <ChatTable />
  </SafeAreaView>
);

export default compose(
  withStyles({
    container: {
      width: "100%",
      flex: 1
    }
  })
)(Chat);
