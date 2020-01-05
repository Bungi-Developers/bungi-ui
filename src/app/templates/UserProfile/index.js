import React from "react";
import { View, Button, Text, SafeAreaView } from "react-native";
import { compose } from "redux";
import { withConnect, withStyles } from "../../HOCs";
import { Header } from "../../components";
import UserProfileContent from "./Content";
import { selectEditing } from "../../selectors/app";
import { setEditing as setEditingAction } from "../../action-creators/app";

const UserProfile = ({
  user: { name, rating, profile },
  editable,
  editing,
  setEditing,
  styles
}) => {
  const toggleEditing = () => setEditing(!editing);
  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <View style={styles.toolbar}>
          {editable && (
            <View style={{ ...styles.buttonContainer, ...styles.leftButton }}>
              {editing && <Button title="Cancel" onPress={toggleEditing} />}
            </View>
          )}
          <View style={styles.headerContent}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.rating}>{rating}</Text>
          </View>
          {editable && (
            <View style={{ ...styles.buttonContainer, ...styles.rightButton }}>
              <Button
                title={editing ? "Save" : "Edit"}
                onPress={toggleEditing}
              />
            </View>
          )}
        </View>
      </Header>
      <UserProfileContent profile={profile} />
    </SafeAreaView>
  );
};

const propMap = {
  editing: selectEditing
};

const actionMap = {
  setEditing: setEditingAction,
};

export default compose(
  withStyles({
    container: {
      flex: 1
    },
    toolbar: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      marginRight: 12,
      justifyContent: "center"
    },
    headerContent: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row"
    },
    name: {
      fontSize: 22,
      fontFamily: "avenir-next-bold",
      marginRight: 6
    },
    buttonContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center"
    },
    rightButton: {
      justifyContent: "flex-end"
    },
    leftButton: {
      justifyContent: "flex-start"
    },
    rating: {
      fontSize: 12,
      fontFamily: "avenir-next"
    }
  }),
  withConnect(propMap, actionMap),
)(UserProfile);
