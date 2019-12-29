import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { compose } from "redux";
import { withStyles } from "../../HOCs";
import { Header } from "../../components";
import UserProfileContent from "./Content";

const UserProfile = ({
  user: { name, rating, profile },
  editable = false,
  styles
}) => {
  const [editing, setEditing] = useState(false);
  const toggleEditing = () => setEditing(!editing);
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default compose(
  withStyles({
    container: {
      flex: 1
    },
    toolbar: {
      width: "100%",
      height: 45,
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
  })
)(UserProfile);
