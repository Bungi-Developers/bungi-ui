import React from "react";
import uuid from "lodash/uniqueId";
import { compose } from "redux";
import { View } from "react-native";
import { withStyles } from "../../../HOCs";
import ChatTableItem from "./ChatTableItem";

export const ChatTable = ({ styles }) => (
  <View style={styles.container}>
    <FlatList
      renderItem={({ item }) => <ChatTableItem {...item} />}
      keyExtractor={item => item.id}
      data={[
        {
          id: uuid(),
          name: "Katie",
          lastSent: "9:23 AM",
          imageUrl:
            "https://images.unsplash.com/photo-1527706910680-d5144b1b7344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
        },
        {
          id: uuid(),
          name: "Annie",
          lastSent: "1:23 PM",
          imageUrl:
            "https://images.unsplash.com/photo-1522262590532-a991489a0253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80"
        }
      ]}
    />
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
)(ChatTable);
