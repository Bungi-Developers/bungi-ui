import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { compose } from "redux";
import { withConnect, withSafeScroll, withStyles } from "../../HOCs";
import { Header } from "../../components";
import { MaterialIcons } from "@expo/vector-icons";

const EditProfileItem = ({
  title,
}) => {
  return (
    <View>
      <Header>
        <View style={styles.toolbar}>
          <View style={styles.icon}>
            <TouchableHighlight onPress={() => {}}>
              <MaterialIcons name='arrow_back_ios' size={28} />
            </TouchableHighlight>
          </View>
          <View style={styles.title}>
            <Text>{title}</Text>
          </View>
        </View>
      </Header>
    </View>
  );
};

export default compose(
  withSafeScroll,
  withStyles({
    toolbar: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    icon: {
      display: "flex",
      flexDirection: "row",
      alignItems: 'flex-start',
    },
    title: {
      display: "flex",
      flexDirection: "row",
      alignItems: 'center',
    }
  }),
  withConnect(propMap, actionMap),
)(EditProfileItem);
