import React from "react";
import { compose } from "redux";
import { Text, TouchableHighlight, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { withConnect, withStyles } from "../../../HOCs";
import { selectNavigation } from "../../../selectors/app";

const InfoPaneItem = ({ content, Icon, styles, editing, navigation }) => (
  <View style={styles.container}>
    <View style={styles.leftItems}>
      <View style={styles.iconContainer}>
        <Icon size={32} />
      </View>
      <Text style={styles.text}>{content}</Text>
      </View>
    <View>
      { editing && (
        <TouchableHighlight
          onPress={() => navigation.navigate('edit')}
        >
          <MaterialIcons name="edit" size={28} style={styles.edit} />
        </TouchableHighlight>
      )
      }
    </View>
  </View>
);

const propMap = {
  navigation: selectNavigation,
};

export default compose(
  withConnect(propMap, {}),
  withStyles({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 12,
      flex: 1,
      borderBottomColor: "black",
      borderBottomWidth: props => (props.last ? 0 : 1)
    },
    iconContainer: { marginRight: 12, width: 32 },
    text: {
      fontSize: 18,
      height: 18,
      fontFamily: "avenir-next"
    },
    leftItems: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    edit: {
      opacity: 0.2
    }
  }),
)(InfoPaneItem);
