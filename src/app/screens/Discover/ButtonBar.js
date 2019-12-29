import React from "react";
import { View, Button, TouchableHighlight } from "react-native";
import { compose } from "redux";
import { useMutation } from "@apollo/react-hooks";
import { AntDesign } from "@expo/vector-icons";
import CREATE_CHAT_MUTATION from "./mutation";
import { withStyles } from "../../HOCs";

const ButtonBar = ({ styles, user }) => {
  const [createChat, { data }] = useMutation(CREATE_CHAT_MUTATION);
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight onPress={() => {}} style={styles.button}>
        <AntDesign style={styles.icon} name="close" size={32} />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => createChat({ variables: { recipient: user.id } })}
        style={styles.button}
      >
        <AntDesign style={styles.icon} name="camerao" size={32} />
      </TouchableHighlight>
    </View>
  );
};

export default compose(
  withStyles({
    icon: {
      color: "white"
    },
    button: {
      height: 60,
      width: 60,
      borderRadius: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#4185f4"
    },
    buttonContainer: {
      width: "100%",
      position: "absolute",
      bottom: 0,
      left: 0,
      padding: 12,
      backgroundColor: "transparent",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }
  })
)(ButtonBar);
