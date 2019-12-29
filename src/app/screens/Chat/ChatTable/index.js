import React from "react";
import uuid from "lodash/uniqueId";
import { compose } from "redux";
import { View, FlatList, Text } from "react-native";
import { withStyles } from "../../../HOCs";
import ChatTableItem from "./ChatTableItem";

export const ChatTable = ({ styles }) => (
  <View style={styles.container}>
    <View style={styles.newChatsContainer}>
      <View style={styles.newChatCircle}>
        <Text style={styles.newChatsText}>2</Text>
      </View>
      <View>
        <Text>You have 2 new messages!</Text>
      </View>
    </View>
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
      flex: 1
    },
    text: {
      fontSize: 24
    },
    newChatsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottomColor: "black",
      borderBottomWidth: 1,
      padding: 12
    },
    newChatsText: {
      fontFamily: "avenir-next-bold",
      height: 28,
      fontSize: 28
    },
    newChatCircle: {
      borderRadius: 50,
      borderWidth: 1,
      borderColor: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 64,
      width: 64
    }
  })
)(ChatTable);
